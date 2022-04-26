import {fileURLToPath} from 'url'
import path from 'path'
import fs from 'fs'

export const install = (refDirRaw = process.env.INIT_CWD) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const ofmtRoot = path.resolve(__dirname, '..')
  const refDir = path.resolve(refDirRaw)

  if (ofmtRoot === refDir) {
    console.log("Install is not supposed to be called from ofmt project")
    return
  }

  // ANCHOR 1. Create symlink to .prettierrc
  const prettierrcFilename = '.prettierrc'
  const prettierrcPath = path.join(ofmtRoot, prettierrcFilename)
  const prettierrcTargetPath = path.join(refDir, prettierrcFilename)
  const prettierrcTargetPathExists = fs.existsSync(prettierrcTargetPath)

  if (prettierrcTargetPathExists) {
    console.log(`"${prettierrcFilename}" file exists in your project. Remove it if you want the one from "ofmt" installed.`)
  }

  if (!prettierrcTargetPathExists) {
    fs.symlinkSync(prettierrcPath, prettierrcTargetPath)
    console.log(`Added new prettier config to your project in "${prettierrcFilename}" file.`)
  }

  // ANCHOR 2. Add "eslint.quality.cjs" to extends of eslint config within package.json
  const eslintConfigFilename = 'eslint.quality.cjs'
  const packageJsonPath = path.join(refDir, 'package.json')
  const eslintConfigPath = path.join(ofmtRoot, eslintConfigFilename)
  const eslintConfigRelPath = path.relative(refDir, eslintConfigPath)
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, {encoding: 'utf-8'}))
  let updated = false

  if (!packageJson.eslintConfig) {
    packageJson.eslintConfig = {extends: eslintConfigRelPath}
    updated = true
    console.log('Added new eslint config to your package.json.')
  }

  if (packageJson.eslintConfig && !packageJson.eslintConfig.extends) {
    packageJson.eslintConfig.extends = eslintConfigRelPath
    updated = true
    console.log('Your eslint config in package.json is extended.')
  }

  if (packageJson.eslintConfig && packageJson.eslintConfig.extends) {
    const existingConfig = packageJson.eslintConfig.extends

    if (Array.isArray(existingConfig) && !existingConfig.includes(eslintConfigRelPath)) {
      packageJson.eslintConfig.extends.push(eslintConfigRelPath)
      updated = true
      console.log('Your eslint config in package.json is extended.')
    }

    if (!Array.isArray(existingConfig) && existingConfig !== eslintConfigRelPath) {
      packageJson.eslintConfig.extends = [existingConfig, eslintConfigRelPath]
      updated = true
      console.log('Your eslint config in package.json is extended.')
    }
  }

  if (updated) {
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
  }
}
