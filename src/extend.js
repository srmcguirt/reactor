/**
 * Add props from second object to first without overwrite.
 * @param {*} obj1
 * @param {*} obj2
 * @returns {void}
 * @example
 *  var obj1 = {
 *    a: 1,
 *    b: 2
 *  };
 *  var obj2 = {
 *    b: 4,
 *    c: 3
 *  };
 *
 *  extend(obj1, obj2)
 */
function extend(obj1, obj2) {
  for (const k2 in obj2) {
      obj1[k2] === undefined ? obj1[k2] = obj2[k2] : undefined
  }
}
