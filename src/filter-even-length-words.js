/**
 * Given an array of strings, return only even length words.
 * @param {Array<string>} words
 * @returns Array<string>
 */
function filterEvenLengthWords(words) {
  /**
   * Check if number is even.
   * @param {string} str
   * @returns boolean
   */
  const isEven = (str) => str.length % 2 === 0;

  return words.filter(isEven);
}
