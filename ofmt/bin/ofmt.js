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

/**
 * Find config either as a dependency of ofmt or as a dependency of the parent project.
 * @param {string} config
 * @return {string | undefined}
 */
const findConfig = (config) => {
  const foundConfigPath = [
    `../${config}`, // Path within another package, where 'ofmt' is installed as a dependency.
    `node_modules/@ottofeller/${config}`, // Path within this package.
  ].find((filePath) => {
    const fullPath = path.resolve(packageRoot, filePath)

    try {
      const stats = statSync(fullPath)

      if (stats.isFile()) {
        return fullPath
      }
    } catch {
      console.warn(`Can't read file ${fullPath}`)
    }
  })

  return foundConfigPath && path.resolve(packageRoot, foundConfigPath)
}

const prettierConfigPath = findConfig('prettier-config-ofmt/index.json')
const eslintConfigPath = findConfig('eslint-config-ofmt/eslint.formatting.cjs')

if (!prettierConfigPath) {
  console.error('Prettier config file is not found. Please install "@ottofeller/prettier-config-ofmt".')
}

if (!eslintConfigPath) {
  console.error('Eslint formatting config file is not found. Please install "@ottofeller/eslint-config-ofmt".')
}

if (!prettierConfigPath || !eslintConfigPath) {
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

  const eslintExt = '.cjs,.js,.jsx,.ts,.tsx'

  ;[
    `npx prettier --${checkOrWrite} --config ${prettierConfigPath} ${args.input}`,
    `npx eslint --ext ${eslintExt} --config ${eslintConfigPath} ${args.flags.lint ? '' : '--fix'} ${args.input}`,
  ].forEach((command) => {
    exec(command, (error, stdout, stderr) => {
      console.log(stdout)

      if (error) {
        console.log(stderr)
        process.exit(1)
      }
    })
  })
}
