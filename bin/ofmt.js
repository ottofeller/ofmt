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

  if (args.flags.lint) {
    await execAsync(`npx prettier --check ${args.input}`)
  }

  if (!args.flags.lint) {
    await execAsync(`npx prettier --write ${args.input}`)
  }
})()
