/**
 * Given an object, remove any properties whose values are odd numbers.
 *
 * @param   {Object<string, any>} obj The object to modify.
 * @returns {Object<string, any>}     The modified object.
 */
function removeOddValues(obj) {
  /**
   * Checks if a number is odd.
   *
   * @param   {number}  num The number to check.
   * @returns {boolean}     True if the number is odd, false otherwise.
   */
  const isOdd = num => num % 2 === 1

  for (const key in obj) {
    /** @constant {*} */
    const value = obj[key]
    if (typeof value === 'number' && isOdd(value))
      delete obj[key]
  }

  return obj
}

export { removeOddValues }
