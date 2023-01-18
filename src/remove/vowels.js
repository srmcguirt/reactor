/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable jsdoc/require-param-description */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */
// Time limit 45 minutes
// Write a function removeVowels that takes a string and returns a string with all the vowels (a, e, i, o, u) removed.

/**
 * @param {string | string[]} str
 */
function removeVowels(str) {
  var vowels = 'aeiou'
  // create vowels array.
  var vArr = [...vowels, ...vowels.toUpperCase()]
  // create string array.
  var sArr = str.split('')
  // performance increase when string array length assigned
  var sLen = sArr.length

  if (typeof str !== 'string')
    return ''

  // use loop for string array
  for (let i = 0; i < sLen; i++) {
    // if the vowel array includes the current character
    if (vArr.includes(str[i])) {
      // delete it
      delete sArr[i]
    }
  }

  // return a new string of the string array
  return sArr.join('')
}

function removeVowelsRegex(str) {
  // if str input is not a string, return a empty string.
  // Look for vowels globally, ignoring the case.
  if (typeof str !== 'string')
    return ''

  else
    return str.replace(/[aeiou]/gi, '')
}
