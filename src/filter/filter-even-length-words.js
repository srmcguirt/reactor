/**
 * Given an array of strings, return only even length words.
 *
 * @param   {string[]} words Input array.
 * @returns {string[]}       Array of even length words.
 */
function filterEvenLengthWords(words) {
  /**
   * Check if string length is even.
   *
   * @param   {string}  string Input string.
   * @returns {boolean}        True if even, false if odd.
   */
  const isStringEven = string => string.length % 2 === 0

  return words.filter(isStringEven)
}

export { filterEvenLengthWords }
