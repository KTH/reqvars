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

test('should throw error if one environment variable is missing', async t => {
  t.throws(() => {
    reqvars.throwIfMissingRequiredEnvVariable('.env.with-one-required-variable')
  })
})

test('should not throw error if all environment variable are present ', async t => {
  process.env.FOO = 'BAR'
  reqvars.throwIfMissingRequiredEnvVariable('.env.with-one-required-variable')
  t.pass()
})
