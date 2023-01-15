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
  /** @constant {boolean} */
  const isPositive = num1 > 0
  // get absolute values of operands and calc mod.
  /** @constant {number} */
  const x = Math.abs(num1)
  /** @constant {number} */
  const y = Math.abs(num2)
  /** @constant {number} */
  const result = x - y * Math.floor(x / y)

  return isPositive ? result : -result
}

export { modulo }
