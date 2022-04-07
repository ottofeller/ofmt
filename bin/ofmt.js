#!/usr/bin/env node
import {exec} from 'child_process'
import meow from 'meow'
import util from 'util'
const execAsync = util.promisify(exec)

void (async function () {
  const args = meow({
    importMeta: import.meta,
    flags: {lint: {type: 'boolean', alias: 'l'}},
  })

  const prettierOptions =
    '--print-width 120 --tab-width 2 --no-semi --single-quote --quote-props as-needed --trailing-comma all --no-bracket-spacing --arrow-parens always'

  console.log(prettierOptions)

  if (args.flags.lint) {
    await execAsync(`npx prettier --check ${prettierOptions} ${args.input}`)
    return
  }

  if (!args.flags.lint) {
    console.log('Formatting...')
    await execAsync(`npx prettier --write ${prettierOptions} ${args.input}`)
    return
  }

  return
})()
