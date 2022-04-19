#!/usr/bin/env node
import {exec} from 'child_process'
import meow from 'meow'
import {fileURLToPath} from 'url'
import path from 'path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const args = meow({
  importMeta: import.meta,
  flags: {lint: {type: 'boolean', alias: 'l'}},
})

const checkOrWrite = args.flags.lint ? 'check' : 'write'
const configPath = path.resolve(__dirname, '../.prettierrc')
exec(`npx prettier --${checkOrWrite} --config ${configPath} ${args.input}`, console.log)
