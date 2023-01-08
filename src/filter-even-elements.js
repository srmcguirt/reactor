/**
 * Given a number array, return even numbers in new array.
 * @param {Array<number>} arr
 * @returns {Array<number>} newArray
 */
function filterEvenElements(arr) {
  /**
   * @type {Array<number>}
   */
  let newArr = [...arr];
  /**
   * Check if number is even.
   * @param {number} n
   * @returns {boolean} isEven
   */
  const isEven = (n) => n % 2 === 0;
  /**
   * Return the filtered new array.
   */
  return newArr.filter(isEven);
}
