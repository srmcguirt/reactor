/**
 * Given an array of strings, return only odd length words.
 *
 * @param   {string[]} words Input array.
 * @returns {string[]}       Array of odd length words.
 */
function filterOddLengthWords(words) {
  /**
   * Check if string length is odd.
   *
   * @param   {string}  string Input string.
   * @returns {boolean}        True if odd, false if even.
   */
  const isStringOdd = string => string.length % 2 === 1

  return words.filter(isStringOdd)
}

export { filterOddLengthWords }
