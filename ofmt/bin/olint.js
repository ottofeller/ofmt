#!/usr/bin/env node
import {ESLint} from 'eslint'
import meow from 'meow'

void (async function () {
  const args = meow({
    importMeta: import.meta,
  })

  const eslint = new ESLint({
    fix: false,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    overrideConfigFile: '@ottofeller/eslint-config-ofmt/eslint.quality.cjs',
    useEslintrc: false,
  })

  const results = await eslint.lintFiles(args.input)
  const formatter = await eslint.loadFormatter('stylish')
  console.log(formatter.format(results))
})()
