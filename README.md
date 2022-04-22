# OFMT is a formatting and linting tool

* **Formatting** is done solely by prettier. It is completely automated, and not configurable in any way other than changing the [`.prettierrc`](https://github.com/quesabe/ofmt/blob/add-readme/package.json) of this repo, and republishing the package.
* **Linting** is not related to formatting in any way. The goal of linting is to catch early code quality issues, and enforce usage of best practices.

## Install

```shell
npm install @ottofeller/ofmt --save-dev
```

## Configs

The project contains the following configs:
- `.prettierrc` formatting rules
- `eslint.quality.cjs` with JS/TS-specific code quality and best practices rules
- `eslint.tailwind.cjs` same as above, CSS-specific

Direct use of configs is meant only for IDE support. For CLI runs use the provided executables.

## Executables

There are two _bin_ files that perform the code checking:
- `ofmt` - prettier formatter
- `olint` - code quality and best practices linter.

### ofmt

#### Options:
- `-l, --lint` - a flag to perform checking only. Without the flag prettier will rewrite files with fixed formatting.
- _non-flag_ - the prettier target files. This can contain any of file paths, directory paths, and glob patterns.
- `install` - a non-flag argument that creates a symlink to prettier config file and adds/extends eslint config within _package.json_. The second argument is the destination path.\
NOTE: the `install` script does not attempt to overwrite existing `prettier` config - if a _.prettierrc_ file exists it is left as is. An existing `eslint` config is extended with _eslint.quality.cjs_.

#### Examples:

Check TS files with prettier
```bash
npx ofmt -l './src/**/*.ts'
```

Fix TS files with prettier
```bash
npx ofmt './src/**/*.ts'
```

Install _prettier_ and _eslint_ configs to your project
```bash
npx ofmt install .
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

### olint

#### Options:
- _non-flag_ - the lint target files. This can contain any of file paths, directory paths, and glob patterns.

#### Examples:
```bash
npx olint './src/**/*.ts'
```
