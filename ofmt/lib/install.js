import {exec} from 'child_process'
import {fileURLToPath} from 'url'
import path from 'path'
import fs from 'fs'

export const install = (refDirRaw = process.env.INIT_CWD) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const ofmtRoot = path.resolve(__dirname, '..')
  const refDir = path.resolve(refDirRaw)
  const packageJsonPath = path.join(refDir, 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, {encoding: 'utf-8'}))

  if (ofmtRoot === refDir) {
    console.log("Install is not supposed to be called from ofmt project")
    return
  }

  console.log('Installing...')

  exec('npm install @ottofeller/eslint-config-ofmt --save-dev --save-exact').on(
    'close',
    () => { console.log('Done!'); process.exit(0) },
  )

  // ANCHOR 1. Create symlink to .prettierrc
  packageJson.prettier = '@ottofeller/prettier-config-ofmt'

  // ANCHOR 2. Add "eslint.quality.cjs" to extends of eslint config within package.json
  const eslintConfigPath = '@ottofeller/eslint-config-ofmt/eslint.quality.cjs'

  if (!packageJson.eslintConfig) {
    packageJson.eslintConfig = {extends: eslintConfigPath}
    console.log('Added new eslint config to your package.json.')
  }

  if (packageJson.eslintConfig && !packageJson.eslintConfig.extends) {
    packageJson.eslintConfig.extends = eslintConfigPath
    console.log('Your eslint config in package.json is extended.')
  }

  if (packageJson.eslintConfig && packageJson.eslintConfig.extends) {
    const existingConfig = packageJson.eslintConfig.extends

    if (Array.isArray(existingConfig) && !existingConfig.includes(eslintConfigPath)) {
      packageJson.eslintConfig.extends.push(eslintConfigPath)
      console.log('Your eslint config in package.json is extended.')
    }

    if (!Array.isArray(existingConfig) && existingConfig !== eslintConfigPath) {
      packageJson.eslintConfig.extends = [existingConfig, eslintConfigPath]
      console.log('Your eslint config in package.json is extended.')
    }
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
}
