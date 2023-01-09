/**
 * Given an object, remove any props whose values are arrays.
 *
 * @param   {Object<string, any>} object Source object.
 * @returns {Object<string, any>}        Object with array values removed.
 * @example
 *
 *  var obj = {
 *    a: [1, 3, 4],
 *    b: 2,
 *    c: ['hi', 'world']
 *  }
 */
function removeArrayValues(object) {
  // loop thru object for props
  for (const key in object) {
    // check for prop type and delete
    if (Array.isArray(object[key]))
      delete object[key]
  }
  // return original object
  return object
}

export { removeArrayValues }
