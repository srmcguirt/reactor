/**
 * Given an array, return the largest number.
 *
 * @param   {number[]} arr Input number array.
 * @returns {number}       Zero or largest number in array.
 */
function getLargestElement(arr) {
  if (arr.length <= 0)
    return 0

  /** @constant {number} */
  const arrSort = arr.sort((a, b) => b - a)
  return arrSort[0]
}

const output = getLargestElement([5, 2, 8, 3])
console.log(output) // --> 8;

export { getLargestElement }
