/**
 * Given an number array, return the sum of all elements.
 *
 * @param   {number[]} arr Input number array.
 * @returns {number}       Return sum.
 */
function computeSumOfAllElements(arr) {
  let sum = 0
  if (arr.length <= 0)
    return sum

  const mappedArray = [...arr].map(v => v)
  sum = mappedArray.reduce((p, c) => p += c)
  return sum
}

export { computeSumOfAllElements }
