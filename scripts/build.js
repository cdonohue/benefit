const fs = require("fs-extra")
const gzipSize = require("gzip-size")
const util = require("util")
const path = require("path")
const mkdirp = require("mkdirp")
const rollup = require("rollup")
const createRollupConfig = require("./createRollupConfig")
const chalk = require("chalk")
const createLogger = require("progress-estimator")
const Table = require("cli-table")

const logger = createLogger({
  storagePath: path.join(resolveApp("build"), ".progress-estimator"),
})

function resolveApp(relativePath) {
  return path.resolve(fs.realpathSync(process.cwd()), relativePath)
}

function ensureBuildFolder() {
  return util.promisify(mkdirp)(resolveApp("build"))
}

function ensureDistFolder() {
  return util.promisify(mkdirp)(resolveApp("dist"))
}

function ensureBuildFolders(name) {
  return (
    util.promisify(mkdirp)(resolveApp("build")) &&
    util.promisify(mkdirp)(resolveApp("dist"))
  )
}

function writeEntryFile(name) {
  const baseLine = `module.exports = require('./${name}`
  const contents = `
'use strict'
if (process.env.NODE_ENV === 'production') {
  ${baseLine}.cjs.production.min.js')
} else {
  ${baseLine}.cjs.development.js')
}
`
  return fs.writeFile(resolveApp(`./dist/index.js`), contents)
}

async function build(packageName) {
  const options = {
    input: `./index.ts`,
    name: packageName,
  }

  await ensureBuildFolders(packageName)

  logger(
    await writeEntryFile(packageName),
    `Creating ${packageName} entry file`
  )

  const configs = {
    cjsDev: createRollupConfig("cjs", { env: "development", ...options }),
    cjsProd: createRollupConfig("cjs", { env: "production", ...options }),
    esm: createRollupConfig("esm", { ...options }),
  }

  const builds = Promise.all(
    Object.values(configs).map(async (config) => {
      const bundle = await rollup.rollup(config)
      return bundle.write(config.output)
    })
  )

  await logger(builds, `Building ${packageName}...`)
}

const [package] = process.argv.slice(2)

build(package)
