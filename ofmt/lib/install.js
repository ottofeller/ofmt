import {exec} from 'child_process'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

/**
 * Install 'ofmt` to a project:
 * - install eslint and prettier configs;
 * - add eslint and prettier configs to package.json;
 * - add `format` and `lint` scripts to package.json.
 * @param {string} refDirRaw
 * @param {string} srcPath
 */
export const install = (refDirRaw, srcPath) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const ofmtRoot = path.resolve(__dirname, '..')
  const refDir = path.resolve(refDirRaw)
  const packageJsonPath = path.join(refDir, 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, {encoding: 'utf-8'}))

  if (ofmtRoot === refDir) {
    console.log('Install is not supposed to be called from ofmt project')
    return
  }

  console.log('Installing...')

  // ANCHOR 1. Install the configs
  exec('npm install @ottofeller/eslint-config-ofmt @ottofeller/prettier-config-ofmt --save-dev --save-exact').on(
    'close',
    () => {
      console.log('Done!')
      process.exit(0)
    },
  )

  // ANCHOR 2. Point the ofmt prettier config
  packageJson.prettier = '@ottofeller/prettier-config-ofmt'

  // ANCHOR 3. Add "eslint.quality.cjs" to extends of eslint config within package.json
  const eslintConfigPath = '@ottofeller/eslint-config-ofmt/eslint.quality.cjs'
  const reportExtension = () => console.log('Your eslint config in package.json is extended.')

  if (!packageJson.eslintConfig) {
    packageJson.eslintConfig = {extends: eslintConfigPath}
    console.log('Added new eslint config to your package.json.')
  }

  if (packageJson.eslintConfig && !packageJson.eslintConfig.extends) {
    packageJson.eslintConfig.extends = eslintConfigPath
    reportExtension()
  }

  if (packageJson.eslintConfig && packageJson.eslintConfig.extends) {
    const existingConfig = packageJson.eslintConfig.extends

    // TODO: This disable directive remains for compatibility with the previous config. Delete when settled.
    if (Array.isArray(existingConfig) && !existingConfig.includes(eslintConfigPath)) {
      packageJson.eslintConfig.extends.push(eslintConfigPath)
      reportExtension()
    }

    // TODO: This disable directive remains for compatibility with the previous config. Delete when settled.
    if (!Array.isArray(existingConfig) && existingConfig !== eslintConfigPath) {
      packageJson.eslintConfig.extends = [existingConfig, eslintConfigPath]
      reportExtension()
    }
  }

  // ANCHOR 4. Add "format" and "lint" scripts to the package.json
  const scripts = {
    format: `ofmt ${srcPath}`,
    lint: `ofmt --lint ${srcPath} && olint ${srcPath}`,
  }

  if (!packageJson.scripts) {
    packageJson.scripts = {}
  }

  Object.entries(scripts).forEach(([name, command]) => {
    if (packageJson.scripts[name]) {
      console.warn(`Script "${name}" already exists in your package.json.`)
    } else {
      packageJson.scripts[name] = command
    }
  })

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
}
