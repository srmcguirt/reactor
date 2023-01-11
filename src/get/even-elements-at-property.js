/**
 * Given an object, return an array containing all even elements of the array at given key.
 *
 * @param   {Object<string, number[]>} obj Input object.
 * @param   {string}                   key Input key.
 * @returns {[]|number[]}                  Returns empty or even elements in array.
 */
function getEvenElementsAtProperty(obj, key) {
  if (
    obj[key] === undefined
    || !Array.isArray(obj[key])
    || obj[key].length <= 0
  )
    return []

  /**
   * Check if number is even.
   *
   * @param   {number}  num Input number.
   * @returns {boolean}     True if even, false otherwise.
   */
  const isEven = num => num % 2 === 0
  return obj[key].filter(v => isEven(v))
}

export { getEvenElementsAtProperty }
