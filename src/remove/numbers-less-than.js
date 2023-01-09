/**
 * Given a number and an object, remove any properties whose values are less than the number.
 *
 * @param   {number}              num Number to compare against.
 * @param   {Object<string, any>} obj Source object.
 * @returns {Object<string, any>}     Object with number values removed.
 */
function removeNumbersLessThan(num, obj) {
  for (const key in obj) {
    if (obj[key] < num)
      delete obj[key]
  }

  return obj
}

export { removeNumbersLessThan }
