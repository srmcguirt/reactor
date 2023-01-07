/**
 * Given a string array, return the longest element in the array.
 * @param {*} arr
 * @returns {string}
 * @example
 *
 *  var arr = ['one', 'two', 'three']
 */
function getLongestElement(arr) {
  let result = ''
  if (arr.length <= 0) {
    return result
  } else {
    result = arr.reduce(
      /**
       * @param {*} p
       * @param {*} c
       */
      (p, c) => (p.length > c.length) ? p : c
    )
    return result
  }
}
