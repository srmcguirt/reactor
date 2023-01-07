/**
 * Given an object, remove any props whose values are arrays.
 * @param {*} obj
 * @returns {object}
 * @example
 *
 *  var obj = {
 *    a: [1, 3, 4],
 *    b: 2,
 *    c: ['hi', 'world']
 *  }
 */
function removeArrayValues(obj) {
  // loop thru object for props
  for (const key in obj) {
    // check for prop type and delete
    if (Array.isArray(obj[key])) {
      delete obj[key]
    }
  }
  // return original object
  return obj
}
