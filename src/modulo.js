/**
 * Find modulo given operands.
 *
 * @param   {number}     num1 Input number.
 * @param   {number}     num2 Input divisor.
 * @returns {number|NaN}      Returns NaN, zero, or calculated mod.
 */
function modulo(num1, num2) {
  // if first operand 0, return 0
  if (num1 === 0)
    return 0
  // if second operand 0, return NaN
  else if (num2 === 0 || typeof num2 !== 'number' || typeof num1 !== 'number')
    return NaN

  // store sign of first operand
  let isPositive = true
  if (num1 < 0)
    isPositive = false

  num1 = Math.abs(num1)
  num2 = Math.abs(num2)

  /**
   * Calculate modulo.
   *
   * @param   {number}   n Input number.
   * @param   {number}   d Input divisor.
   * @returns {*|number}   Return fn or number.
   */
  const mod = (n, d) => {
    /** @constant {number} */
    const m = n - d * Math.floor(n / d)
    return m
  }

  let result = 0
  if (isPositive)
    result = mod(num1, num2)

  else
    result = -mod(num1, num2)

  return result
}

export { modulo }
