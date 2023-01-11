/**
 * Given an object, return an array containing all odd elements of the array at given key.
 *
 * @param   {Object<string, number[]>} obj Input object.
 * @param   {string}                   key Input key.
 * @returns {[]|number[]}                  Returns empty or odd elements in array.
 */
function getOddElementsAtProperty(obj, key) {
  if (
    obj[key] === undefined
    || !Array.isArray(obj[key])
    || obj[key].length <= 0
  )
    return []

  /**
   * Check if number is odd.
   *
   * @param   {number}  num Input number.
   * @returns {boolean}     True if odd, false otherwise.
   */
  const isOdd = num => num % 2 === 1
  return obj[key].filter(v => isOdd(v))
}

export { getOddElementsAtProperty }
