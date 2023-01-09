/**
 * Given a number array, return even numbers in new array.
 *
 * @param   {number[]} array Input array.
 * @returns {number[]}       New array of even numbers.
 */
function filterEvenElements(array) {
  /**
   * @type {Array<number>}
   */
  const newArray = [...array]
  /**
   * Check if number is even.
   *
   * @param   {number}  n Input number.
   * @returns {boolean}   True if even, false if odd.
   */
  const isEven = n => n % 2 === 0
  /**
   * Return the filtered new array.
   */
  return newArray.filter(isEven)
}

export { filterEvenElements }
