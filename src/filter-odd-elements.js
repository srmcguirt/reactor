/**
 * Given a number array, return odd numbers in new array.
 * @param {Array<number>} arr
 * @returns {Array<number>} newArray
 */
function filterOddElements(arr) {
  /**
   * @type {Array<number>}
   */
  let newArr = [...arr]
  /**
   * Check if number is odd.
   * @param {number} n
   * @returns {boolean} isOdd
   */
  const isOdd = n => n % 2 === 1
  /**
   * Return the filtered new array.
   */
  return newArr.filter(isOdd)
}
