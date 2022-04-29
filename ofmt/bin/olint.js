#!/usr/bin/env node
import eslintConfigOfmt from '@ottofeller/eslint-config-ofmt/eslint.quality.cjs'
import {ESLint} from 'eslint'
import meow from 'meow'

void (async function () {
  const args = meow({
    importMeta: import.meta,
  })

  const eslint = new ESLint({
    fix: false,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    overrideConfig: eslintConfigOfmt,
    useEslintrc: false,
  })

  const results = await eslint.lintFiles(args.input)
  const formatter = await eslint.loadFormatter('stylish')
  console.log(formatter.format(results))
})()
