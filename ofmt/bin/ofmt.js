#!/usr/bin/env node
import {exec} from 'child_process'
import {statSync} from 'fs'
import meow from 'meow'
import path from 'path'
import {fileURLToPath} from 'url'
// eslint-disable-next-line import/no-relative-parent-imports -- Can't add a path in an easy way at the moment
import {install} from '../lib/install.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const packageRoot = path.resolve(__dirname, '..')

const prettierConfigPath = [
  '../prettier-config-ofmt/index.json', // Path within another package, where 'ofmt' is installed as a dependency.
  'node_modules/@ottofeller/prettier-config-ofmt/index.json', // Path within this package.
].find((filePath) => {
  const fullPath = path.resolve(packageRoot, filePath)
  try {
    return statSync(fullPath)
  } catch {
    console.warn(`Can't read file ${fullPath}`)
    return
  }
})

if (!prettierConfigPath) {
  console.error('Prettier config file is not found. Please install "@ottofeller/prettier-config-ofmt".')
  process.exit(1)
}

const args = meow({
  importMeta: import.meta,
  flags: {
    lint: {type: 'boolean', alias: 'l'},
    srcPath: {type: 'string', alias: 'p', default: './src'},
  },
})

if (args.input[0] === 'install') {
  install(args.input[1] || './', args.flags.srcPath)
} else {
  const checkOrWrite = args.flags.lint ? 'check' : 'write --list-different'
  const configPath = path.resolve(packageRoot, prettierConfigPath)
  exec(`npx prettier --${checkOrWrite} --config ${configPath} ${args.input}`, (error, stdout, stderr) => {
    console.log(stdout)

    if (error) {
      console.log(stderr)
      process.exit(1)
    }
  })
}
