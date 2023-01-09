/**
 * Given a number and an object, remove any properties whose values are strings longer than the number.
 *
 * @param   {number}              num Number to compare against.
 * @param   {Object<string, any>} obj Source object.
 * @returns {Object<string, any>}     Object with string values removed.
 */
function removeStringValuesLongerThan(num, obj) {
  for (const key in obj) {
    /** @type {any} */
    const n = obj[key]
    if (typeof n === 'string' && n.length > num)
      delete obj[key]
  }

  return obj
}

export { removeStringValuesLongerThan }
