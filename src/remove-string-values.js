/**
 * Given an object, remove any props that have values that are strings.
 * @param {*} obj
 * @returns {object}
 */
function removeStringValues(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      delete obj[key];
    }
  }

  return obj;
}
