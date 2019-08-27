import test from 'ava'
const reqvars = require('./index')

test('should throw an error if one variable is missing from the variables object', async t => {
  t.throws(() => {
    reqvars.throwIfMissing({ foo: 'bar' }, {})
  })
})

test('should do nothing if all the required variables are present', async t => {
  reqvars.throwIfMissing(['foo'], { foo: 'bar' })
  t.pass()
})
