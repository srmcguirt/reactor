/**
 * Compute the product of all given numbers in array.
 *
 * @param   {number[]} array Input array.
 * @returns {number}         Product of all numbers in array.
 */
export function computeProductOfAllElements(array) {
  /**
   * @type {number}
   */
  let product = 1
  // Check for 0
  if (array.length <= 0)
    return 0
    // Check for undefined

  for (const element of array)
    product *= element

  return product
}
