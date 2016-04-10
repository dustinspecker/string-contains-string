'use strict'

/**
 * Check if one of two strings contains the other
 *
 * @param {String} str1 - a string to test
 * @param {String} str2 - another string to test
 * @throws {TypeError} - if str1 or str2 is not a string
 * @return {Boolean} - if str1 contains str2 or str2 contains str1
 */
module.exports = (str1, str2) => {
  if (typeof str1 !== 'string') {
    throw new TypeError('Expected str1 to be a string')
  }

  if (typeof str2 !== 'string') {
    throw new TypeError('Expected str2 to be a string')
  }

  return str1.indexOf(str2) > -1 || str2.indexOf(str1) > -1
}
