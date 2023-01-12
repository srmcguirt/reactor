/**
 * Given a string, return the string character that is in the middle or empty if even.
 *
 * @param   {string} str Input string.
 * @returns {string}     Outputs empty string or character.
 */
function findMiddleChar(str) {
  /** @type {string} */
  let result = ''
  // type safe the input
  if (typeof str !== 'string' || !str.length || str === undefined)
    return result
  /**
   * Check if is odd string length.
   *
   * @param   {number}  num Input string length.
   * @returns {boolean}     True if odd, false otherwise.
   */
  const isOdd = num => Boolean(num % 2 === 1)
  // array of the split string
  const arr = str.split('')
  // no magic numbers, divide by two to find middle.
  const divideInHalf = 2
  // Round down the calculation of the arr length divided in half, to get whole numbers.
  const midpoint = Math.floor(arr.length / divideInHalf)

  return result = isOdd(str.length) ? arr[midpoint] : ''
}

export { findMiddleChar }
