#!/usr/bin/env node
import {ESLint} from 'eslint'
import {fileURLToPath} from 'url'
import meow from 'meow'
import path from 'path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

void async function () {
  const args = meow({
    importMeta: import.meta,
  })

  const eslint = new ESLint({
    fix               : false,
    extensions        : ['.js', '.jsx', '.ts', '.tsx'],
    overrideConfigFile: `${__dirname}/../eslint.quality.cjs`,
    useEslintrc       : false,
  })

  const results = await eslint.lintFiles(args.input)
  const formatter = await eslint.loadFormatter('stylish')
  console.log(formatter.format(results))
}()
