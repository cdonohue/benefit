const fs = require("fs-extra")
const gzipSize = require("gzip-size")
const util = require("util")
const path = require("path")
const mkdirp = require("mkdirp")
const pkg = require("../package.json")
const rollup = require("rollup")
const createRollupConfig = require("./bin/createRollupConfig")
const chalk = require("chalk")
const createLogger = require("progress-estimator")

const logger = createLogger({
  storagePath: path.join(__dirname, ".progress-estimator"),
})

function resolveApp(relativePath) {
  return path.resolve(fs.realpathSync(process.cwd()), relativePath)
}

function ensureDistFolder() {
  return util.promisify(mkdirp)(resolveApp("dist"))
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

const options = {
  input: pkg.source,
  name: pkg.name,
}

async function build() {
  await ensureDistFolder()

  logger(await writeEntryFile(pkg.name), "Creating entry file")

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

  await logger(builds, "Building files...")

  console.log(
    chalk.yellow(
      `CJS Dev: \t${(
        (await gzipSize.file(configs.cjsDev.output.file)) / 1000
      ).toFixed(1)}k`
    )
  )

  console.log(
    chalk.green(
      `CJS Prod: \t${(
        (await gzipSize.file(configs.cjsProd.output.file)) / 1000
      ).toFixed(1)}k`
    )
  )

  console.log(
    chalk.blue(
      `Module: \t${(
        (await gzipSize.file(configs.esm.output.file)) / 1000
      ).toFixed(1)}k`
    )
  )
}

build()
