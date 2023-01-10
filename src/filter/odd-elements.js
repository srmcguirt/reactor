/**
 * Given a number array, return odd numbers in new array.
 *
 * @param   {number[]} array Input array.
 * @returns {number[]}       New array.
 */
function filterOddElements(array) {
  /**
   * @constant {number[]}
   */
  const newArray = [...array]
  /**
   * Check if number is odd.
   *
   * @param   {number}  num Input number.
   * @returns {boolean}     True if odd, false if otherwise.
   */
  const isOdd = num => num % 2 === 1
  /**
   * Return the filtered new array.
   */
  return newArray.filter(isOdd)
}

export { filterOddElements }
