const test = require('ava')

test('Should throw if an specified variable is not set', t => {
  const reqvars = require('.', {})
  t.throws(() => {
    reqvars.throwIfMissing('missing_variable')
  })
})

test('Should not throw if an specified variable is set', t => {
  process.env.VARIABLE = 'value'
  const reqvars = require('.', {})

  t.notThrows(() => {
    reqvars.throwIfMissing('VARIABLE')
  })
  delete process.env.VARIABLE
})

test('Should not throw if a variable is set to empty string', t => {
  process.env.VARIABLE2 = ''
  const reqvars = require('.', {})

  t.notThrows(() => {
    reqvars.throwIfMissing('VARIABLE2')
  })
  delete process.env.VARIABLE2
})

test('should not throw if the spec file is met', t => {
  process.env.FOO = 'bar'
  const reqvars = require('.')

  t.notThrows(() => {
    reqvars.check('.env.with-one-required-variable')
  })

  delete process.env.FOO
})

test('should throw if the spec file is not met', t => {
  const reqvars = require('.', {})

  t.throws(() => {
    reqvars.check('.env.with-one-required-variable')
  })
})
