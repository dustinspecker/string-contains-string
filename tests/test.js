'use strict'
import test from 'ava'

import stringContainsString from '../lib/'

test('it should throw TypeError if either string is not a string', t => {
  const firstStringTest = () => stringContainsString(1, 'hi')
  const secondStringTest = () => stringContainsString('hi', 2)

  t.throws(firstStringTest, TypeError)
  t.throws(firstStringTest, 'Expected str1 to be a string')
  t.throws(secondStringTest, TypeError)
  t.throws(secondStringTest, 'Expected str2 to be a string')
})

test('is false when neither string contains the other', t => {
  t.false(stringContainsString('hello', 'world'))
})

test('is true when either string contains the other', t => {
  t.true(stringContainsString('hello', 'ell'))
  t.true(stringContainsString('ell', 'hello'))
})
