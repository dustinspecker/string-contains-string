# string-contains-string
[![NPM version](https://badge.fury.io/js/string-contains-string.svg)](https://badge.fury.io/js/string-contains-string)
[![Build Status](https://travis-ci.org/dustinspecker/string-contains-string.svg)](https://travis-ci.org/dustinspecker/string-contains-string)
[![Coverage Status](https://img.shields.io/coveralls/dustinspecker/string-contains-string.svg)](https://coveralls.io/r/dustinspecker/string-contains-string?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/string-contains-string/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/string-contains-string)
[![Dependencies](https://david-dm.org/dustinspecker/string-contains-string.svg)](https://david-dm.org/dustinspecker/string-contains-string/#info=dependencies&view=table)
[![DevDependencies](https://david-dm.org/dustinspecker/string-contains-string/dev-status.svg)](https://david-dm.org/dustinspecker/string-contains-string/#info=devDependencies&view=table)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Check if one of two strings contains the other

## Install
```
npm install --save string-contains-string
```

## Usage
```javascript
import stringContainsString from 'string-contains-string'

stringContainsString('hello', 'world')
// => false

stringContainsString('hello', 'ell')
// => true

stringContainsString('ell', 'hello')
// => true
```

## API
### stringContainsString(str1, str2)

Returns a `boolean` if `str1` contains `str2` or `str2` contains `str1`.

#### str1
type: `string`

A string to test.

#### str2
type: `string`

Another string to test.

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
