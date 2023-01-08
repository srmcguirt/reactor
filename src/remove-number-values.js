/**
 * Given an object, remove any props that have values that are numbers.
 * @param {*} obj
 * @returns {object}
 * @example
 *
 *  var obj = {
 *    a: 2,
 *    b: 'test',
 *    c: 4
 *  }
 */
function removeNumberValues(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      delete obj[key];
    }
  }

  return obj;
}
