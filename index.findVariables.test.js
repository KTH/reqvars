const test = require('ava')
const path = require('path')

const reqvars = require('.')

test('Should return all variables in several files', t => {
  t.deepEqual(
    reqvars.findVariables([
      path.resolve(__dirname, './utils/fixtures/test0001.js'),
      path.resolve(__dirname, './utils/fixtures/test0002.js'),
      path.resolve(__dirname, './utils/fixtures/test0003.js')
    ]),
    [
      'VARIABLE_ONE',
      'VARIABLE_TWO',
      'VARIABLE_THREE',
      'VARIABLE_FOUR'
    ]
  )
})
