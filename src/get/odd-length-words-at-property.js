/**
 * Given an object and key, return an array containing all the odd length word elements at the given key.
 *
 * @param   {Object<string, string[]>} obj Input object.
 * @param   {string}                   key Input key.
 * @returns {any[]|string[]}               Returns empty or string array.
 */
function getOddLengthWordsAtProperty(obj, key) {
  if (
    obj === undefined
    || !Array.isArray(obj[key])
    || obj[key].length <= 0
  )
    return []

  /**
   * Check for odd value.
   *
   * @param   {number}  n Input number.
   * @returns {boolean}   True if odd, false otherwise.
   */
  const isOdd = n => n % 2 === 1
  return obj[key].filter(v => isOdd(v.length))
}

export { getOddLengthWordsAtProperty }
