/**
 * Given a character and a string, return the index of the first occurrence of that character in the string.
 *
 * @param   {string} char Character to find.
 * @param   {string} str  String to search.
 * @returns {number}      Index of first occurrence of character in string.
 */
function getIndexOf(char, str) {
  /** @constant {string[]} */
  const arr = str.split('')
  /** @type {number} */
  let index = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      index = i
      return index
    }
  }
  return index
}

export { getIndexOf }
