/**
 * Given a string, return an object with a character count key-pair.
 *
 * @param   {string}                       str Input string.
 * @returns {Object<string, number | any>}     Object paired letter and count value.
 */
function countAllCharacters(str) {
  /** @type {Object<string, number>} */
  const result = {}

  if (str.length === 0) {
    return {}
  }
  else {
    /** @constant {string[]} */
    const arr = str.split('')
    for (const char in arr)
      result[arr[char]] = result[arr[char]] ? result[arr[char]] + 1 : 1
  }

  return result
}

export { countAllCharacters }
