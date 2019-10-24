const test = require('ava')
const utils = require('./index')
const path = require('path')

test('List no variables in an empty file', t => {
  t.deepEqual(
    utils.listVariables(path.resolve(__dirname, './fixtures/test0001.js')),
    []
  )
})

test('List the only variable in a file', t => {
  t.deepEqual(
    utils.listVariables(path.resolve(__dirname, './fixtures/test0002.js')),
    ['VARIABLE_ONE']
  )
})


test('List the 4 variables in a file', t => {
  t.deepEqual(
    utils.listVariables(path.resolve(__dirname, './fixtures/test0003.js')),
    ['VARIABLE_ONE', 'VARIABLE_TWO', 'VARIABLE_THREE', 'VARIABLE_FOUR']
  )
})

test('List the 7 variables in a file', t => {
  t.deepEqual(
    utils.listVariables(path.resolve(__dirname, './fixtures/test0004.js')),
    ['NODE_ENV', 'LOG_LEVEL', 'PROXY_PATH', 'CANVAS_API_URL', 'UG_URL', 'KOPPS_API_URL', 'PORT']
  )
})
