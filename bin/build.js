const fs = require("fs-extra")
const gzipSize = require("gzip-size")
const util = require("util")
const path = require("path")
const mkdirp = require("mkdirp")
const pkg = require("../package.json")
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

  const table = new Table({
    chars: {
      top: "═",
      "top-mid": "╤",
      "top-left": "╔",
      "top-right": "╗",
      bottom: "═",
      "bottom-mid": "╧",
      "bottom-left": "╚",
      "bottom-right": "╝",
      left: "║",
      "left-mid": "╟",
      mid: "─",
      "mid-mid": "┼",
      right: "║",
      "right-mid": "╢",
      middle: "│",
    },
  })

  table.push(
    [
      "Common JS - Development",
      `${((await gzipSize.file(configs.cjsDev.output.file)) / 1000).toFixed(
        1
      )}k`,
    ],
    [
      "Common JS - Production",
      `${((await gzipSize.file(configs.cjsProd.output.file)) / 1000).toFixed(
        1
      )}k`,
    ],
    [
      "ES Module",
      `${((await gzipSize.file(configs.esm.output.file)) / 1000).toFixed(1)}k`,
    ]
  )

  console.log(table.toString())

  // console.log(
  //   chalk.yellow(
  //     `✓ CJS Dev:  ${(
  //       (await gzipSize.file(configs.cjsDev.output.file)) / 1000
  //     ).toFixed(1)}k`
  //   )
  // )

  // console.log(
  //   chalk.green(
  //     `✓ CJS Prod: ${(
  //       (await gzipSize.file(configs.cjsProd.output.file)) / 1000
  //     ).toFixed(1)}k`
  //   )
  // )

  // console.log(
  //   chalk.blue(
  //     `✓ Module:   ${(
  //       (await gzipSize.file(configs.esm.output.file)) / 1000
  //     ).toFixed(1)}k`
  //   )
  // )
}

build()
