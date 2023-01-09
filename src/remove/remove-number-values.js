/**
 * Given an object, remove any props that have values that are numbers.
 *
 * @param   {Object<string, any>} object Source object.
 * @returns {Object<string, any>}        Object with number values removed.
 * @example
 *
 *  var obj = {
 *    a: 2,
 *    b: 'test',
 *    c: 4
 *  }
 */
function removeNumberValues(object) {
  for (const key in object) {
    if (typeof object[key] === 'number')
      delete object[key]
  }

  return object
}

export { removeNumberValues }
