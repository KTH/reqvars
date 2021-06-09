#!/usr/bin/env node
const globby = require('globby')
const yargs = require('yargs')
const { findVariables } = require('../index')

const argv = yargs
  .usage('$0 [files]', 'List environmental variables of files', yargs => {
    yargs.positional('files', {
      describe: 'Files to look at.',

      default: '**/*.js'
    })
  })
  .help('h')
  .argv

const files = globby.sync(argv.files, { gitignore: true })
console.log(findVariables(files).join('\n'))
