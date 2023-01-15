/**
 * Given an array, return the smallest number within the array.
 *
 * @param   {any[]}  arr Input array.
 * @returns {number}     Return zero or smallest number in array.
 */
function findSmallestNumberAmongMixedElements(arr) {
  if (!Array.isArray(arr))
    return 0

  else if (arr.length <= 0)
    return 0

  else if (arr === undefined)
    return 0

  // flatten the array in case of nested arrays.
  const flatArray = arr.flat(Infinity)
  // filter non-strings
  const filteredArray = flatArray.filter(v => typeof v === 'number' && v !== 0)
  // return if no strings left
  if (filteredArray.length <= 0)
    return 0
  // sort the remaining string
  /** @constant {number[]} */
  const sortedArray = filteredArray.sort((a, b) => a - b)
  // return the sorted results
  return sortedArray[0]
}

export { findSmallestNumberAmongMixedElements }
