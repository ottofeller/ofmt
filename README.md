# OFMT is a formatting and linting tool

* **Formatting** is done solely by prettier. It is completely automated, and not configurable in any way other than changing the [`.prettierrc`](https://github.com/quesabe/ofmt/blob/add-readme/package.json) of this repo, and republishing the package.
* **Linting** is not related to formatting in any way. The goal of linting is to catch early code quality issues, and enforce usage of best practices.

## Install

Use the following command to install the package as a dev dependency:
```shell
npm install @ottofeller/ofmt --save-dev --save-exact
```

Then the following command is used to install `prettier` and `eslint` configs as dev dependencies:
```shell
npx ofmt install
```

The latter command on `ofmt` executable does:
- install `@ottofeller/prettier-config-ofmt` package;
- install `@ottofeller/eslint-config-ofmt` package;
- add the configs to _package.json_ (`prettier` and `eslintConfig` fields).
- add `format` and `lint` scripts to _package.json_.

> 💡 For existing `prettier` and `eslintConfig` fields in the _package.json_ file:
> - `prettier` field is overwritten;
> - `eslintConfig` filed is extended with _eslint.quality.cjs_.

> 💡 For existing `format` or `lint` script in the _package.json_ file warns and leaves the script untouched.

## Configs

The project utilizes the following config packages (located within the same repo):
- `@ottofeller/prettier-config-ofmt` package with formatting rules;
- `@ottofeller/eslint-config-ofmt` package containing:
  - `eslint.quality.cjs` with JS/TS-specific code quality and best practices rules
  - `eslint.tailwind.cjs` same as above, CSS-specific

Direct use of configs is meant only for IDE support. For CLI runs use the provided executables.

## Executables

There are two _bin_ files that perform the code checking:
- `ofmt` - prettier formatter. Two options are available:\
  `-l, --lint` - a flag to perform checking only. Without the flag `prettier` will rewrite files with fixed formatting.
  `-p, --src-path` - defines search path for source code within `format` and `lint` scripts (the scripts added to a project upon installation). Defaults to `./src`. Used only with `install` command.
- `olint` - code quality and best practices linter.

## Examples:

> 💡 The examples below use shorthand executable name as registered in _PATH_ by `npm` - available only if the package is installed in the project or in upper scopes on the search path of `npm`. If the `@ottofeller/ofmt` is not installed append with the package name:
```bash
npx -p @ottofeller/ofmt [ofmt|olint] ...
```

#### Check TS files with `prettier`
```bash
npx ofmt -l './src/**/*.ts'
```

#### Fix TS files with `prettier`
```bash
npx ofmt './src/**/*.ts'
```

#### Install `prettier` and `eslint` configs to your project
```bash
npx ofmt install .
```
```bash
npx ofmt install . -p "client server"
```
NOTE: if run as _npm-script_ the path will be inferred:
```json
"scripts": {
  "ofmt:install": "ofmt install",
  ...
}
```
```bash
npm run ofmt:install
```

#### Check TS files with `eslint`
```bash
npx olint './src/**/*.ts'
```
