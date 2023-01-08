/**
 * Check string, split, and return as array.
 * @param {string} str
 * @return {string[]}
 */
function getAllWords(str) {
  if (str.length === 0) {
    return [];
  } else {
    return str.split(' ');
  }
}
