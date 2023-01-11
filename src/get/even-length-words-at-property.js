/**
 * Given an object and key, return an array containing all the even length words at the key element.
 *
 * @param   {Object<string,string[]>} obj Input string object.
 * @param   {string}                  key Input key.
 * @returns {[]|string[]}                 Returns an empty or string array even length words.
 */
function getEvenLengthWordsAtProperty(obj, key) {
  if (
    obj[key] === undefined
    || !Array.isArray(obj[key])
    || obj[key].length <= 0
  )
    return []

  /**
   * Check if number is even.
   *
   * @param   {number}  n Input number.
   * @returns {boolean}   True if even, false otherwise.
   */
  const isEven = n => n % 2 === 0
  return obj[key].filter(v => isEven(v.length))
}

export { getEvenLengthWordsAtProperty }
