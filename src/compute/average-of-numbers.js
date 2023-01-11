/**
 * Given an array, return the numeric average.
 *
 * @param   {number[]} numbers Input array.
 * @returns {number}           Average of number array.
 */
function computeAverageOfNumbers(numbers) {
  if (
    // if not an array
    !Array.isArray(numbers)
    // if undefined
    || numbers === undefined
    // or empty
    || numbers.length === 0
  )
    return 0

  const sum = numbers.reduce((p, c) => p += c)
  return sum / numbers.length
}

export { computeAverageOfNumbers }
