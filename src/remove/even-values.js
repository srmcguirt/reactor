/**
 * Given an object,remove any properties whose values are even.
 *
 * @param   {Object<string, any>} obj Object to remove even values from.
 * @returns {Object<string, any>}     Object with even values removed.
 */
function removeEvenValues(obj) {
  /**
   * Check if a number is even.
   *
   * @param   {number}  num Number to check.
   * @returns {boolean}     True if even, false if odd.
   */
  const isEven = num => num % 2 === 0

  for (const key in obj) {
    /** @constant {*} */
    const value = obj[key]
    if (typeof value === 'number' && isEven(value))
      delete obj[key]
  }

  return obj
}

export { removeEvenValues }
