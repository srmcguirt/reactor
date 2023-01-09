/**
 * Given a number and object, remove any props whose values are greater than the
 * given number.
 *
 * @param   {number}              number Number to compare against.
 * @param   {Object<string, any>} object Source object.
 * @returns {Object<string, any>}        Object with number values removed.
 */
function removeNumbersLargerThan(number, object) {
  for (const key in object) {
    if (object[key] > number)
      delete object[key]
  }

  return object
}

export { removeNumbersLargerThan }
