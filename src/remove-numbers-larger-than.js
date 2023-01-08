/**
 * Given a number and object, remove any props whose values are greater than the
 * given number.
 * @param {*} num
 * @param {*} obj
 * @returns {object} obj
 */
function removeNumbersLargerThan(num, obj) {
  for (const key in obj) {
    if (obj[key] > num) {
      delete obj[key];
    }
  }

  return obj;
}
