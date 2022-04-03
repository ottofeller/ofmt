#!/usr/bin/env node
import {ESLint} from 'eslint'
import {exec} from 'child_process'
import {fileURLToPath} from 'url'
import meow from 'meow'
import path from 'path'
import util from 'util'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const execAsync = util.promisify(exec)

void async function () {
  // ANCHOR Parse arguments
  const args = meow({
    importMeta: import.meta,
    flags     : {'lint': {type: 'boolean', alias: 'l'}},
  })

  // ANCHOR Run prettier with default options
  if(!args.flags.lint) {
    await execAsync(`npx prettier --write --print-width 120 ${args.input}`)
  }

  // ANCHOR Run eslint
  const eslint = new ESLint({
    fix               : !args.flags.lint,
    extensions        : ['.js', '.jsx', '.ts', '.tsx'],
    overrideConfigFile: `${__dirname}/../eslint.formatting.cjs`,
    useEslintrc       : false,
  })

  const results = await eslint.lintFiles(args.input)

  if(!args.flags.lint) {
    await ESLint.outputFixes(results)
  }

  const formatter = await eslint.loadFormatter('stylish')
  console.log(formatter.format(results))
}()
