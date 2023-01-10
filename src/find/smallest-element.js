/**
 * Given an array of numbers, return the smallest element.
 *
 * @param   {number[]} arr Input number array.
 * @returns {number}       Smallest element.
 */
function findSmallestElement(arr) {
  if (arr.length <= 0)
    return 0

  return arr.reduce((prev, curr) => (prev < curr ? prev : curr))
}

export { findSmallestElement }
