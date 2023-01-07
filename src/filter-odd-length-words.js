/**
 * Given an array of strings, return only odd length words.
 * @param {Array<string>} words
 * @returns Array<string>
 */
function filterOddLengthWords(words) {
  /**
   * Check if number is odd.
   * @param {string} str
   * @returns boolean
   */
  const isOdd = str => str.length % 2 === 1

  return words.filter(isOdd)

}
