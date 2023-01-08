/**
 * Given a word returns an array containing every character in the word.
 * @param {string} str
 * @returns {string[]}
 */
function getAllLetters(str) {
  if (str.length === 0) {
    return [];
  }

  return str.split('');
}
