/**
 * Compute the product of all given numbers in array.
 * @param {Array<number>} arr
 * @returns {number} prod
 */
function computeProductOfAllElements(arr) {
  /**
   * @type {number} prod
   */
  let prod = 1;
  // Check for 0
  if (arr.length <= 0) {
    return 0;
    // Check for undefined
  } else if (arr === undefined) {
    return 0;
  } else {
    for (const e of arr) {
      prod = prod * e;
    }
    return prod;
  }
}
