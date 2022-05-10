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
  'node_modules/@ottofeller/prettier-config-ofmt/index.json', // Path within this package.
  '../prettier-config-ofmt/index.json', // Path within another package, where 'ofmt' is installed as a dependency.
].find((filePath) => {
  try {
    return statSync(path.resolve(packageRoot, filePath))
  } catch (error) {
    console.error(error)
    return
  }
})

if (!prettierConfigPath) {
  console.error('Prettier config file is nod found. Please install "@ottofeller/prettier-config-ofmt".')
  process.exit(1)
}

const args = meow({
  importMeta: import.meta,
  flags: {lint: {type: 'boolean', alias: 'l'}},
})

if (args.input[0] === 'install') {
  install(args.input[1] || './')
} else {
  const checkOrWrite = args.flags.lint ? 'check' : 'write'
  const configPath = path.resolve(packageRoot, prettierConfigPath)
  exec(`npx prettier --${checkOrWrite} --config ${configPath} ${args.input}`, console.log)
}
