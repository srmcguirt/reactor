/**
 * Given a number, return the sum of all its digits.
 *
 * @param   {number} num Input number.
 * @returns {number}     Return sum number.
 */
function sumDigits(num) {
  /** @type {number} */
  let sum = 0
  /** @type {number} */
  let negativeNumber = 0

  if (typeof num !== 'number' || num === 0)
    return 0

  /**
   * Check for negative polyfill.
   *
   * @param   {number} n Check for negative.
   * @returns {*}        Return -1, 0, or 1.
   */
  const isNeg = function (n) {
    return (n < 0) ? -1 : (n > 0) ? 1 : 0
  }

  /** @constant {number[]} */
  const arr = Array.from(String(Math.abs(num)), Number)

  if (isNeg(num) < 1) {
    negativeNumber = -Math.abs(arr[0])
    for (let i = 1; i < arr.length; ++i)
      sum += arr[i]
  }
  else {
    for (let i = 0; i < arr.length; ++i)
      sum += arr[i]
  }

  return negativeNumber + sum
}

export { sumDigits }
