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

const relativePrettierConfigPath = [
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

if (!relativePrettierConfigPath) {
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
  const checkPaths = args.input.join(' ')
  const checkOrWrite = args.flags.lint ? 'check' : 'write --list-different'
  const prettierConfigPath = path.resolve(packageRoot, relativePrettierConfigPath)
  const eslintExtensions = '.cjs,.js,.jsx,.ts,.tsx'
  const eslintFix = args.flags.lint ? '' : '--fix'

  const eslintConfigPath = path.resolve(
    packageRoot,
    'node_modules/@ottofeller/eslint-config-ofmt/eslint.formatting.cjs',
  )

  ;[
    `npx prettier --${checkOrWrite} --config ${prettierConfigPath} ${checkPaths}`,
    `npx eslint --config ${eslintConfigPath} --ext ${eslintExtensions} ${eslintFix} ${checkPaths}`,
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
