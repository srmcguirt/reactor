/**
 * Bitwise AND Operator.
 *
 * @description Compares each bit of the first operand to the corresponding
 * bit of the second operand. If both bits are 1, the corresponding result
 * bit is set to 1. Otherwise, the result bit is set to 0.
 * @param   {number}  n Input number.
 * @returns {boolean}   Returns true if both 1, otherwise false.
 */
export const isEven = n => (n & 1) === 0

/**
 * Bitwise OR Operator.
 *
 * @description Compares each bit of the first operand to the corresponding
 * bit of the second operand. If either is 1, the corresponding result bit
 * is set to 1. Otherwise, the result bit is set to 0.
 * @param   {number} n   Input number.
 * @param   {number} bit Bit input.
 * @returns {number}     Returns 1 if true, otherwise 0.
 */
export const setBit = (n, bit) => n | (1 << bit)

/**
 * Bitwise XOR Operator.
 *
 * @description Compares each bit of the first operand to the corresponding
 * bit of the second operand. If the bits are different, the corresponding
 * result bit is set to 1. Otherwise, the result bit is set to 0.
 * @param   {number} n   Input number.
 * @param   {number} bit Bit input.
 * @returns {number}     Returns 1 if true, otherwise 0.
 */
export const toggleBit = (n, bit) => n ^ (1 << bit)

/**
 * Bitwise NOT Operator.
 *
 * @description This operator inverts all the bits of the operand. This
 * operator can be used to negate a number.
 * @param   {number} n Input number.
 * @returns {number}   Returns negated value.
 */
export const negate = n => ~n + 1

/**
 * Bitwise Left shift.
 *
 * @description This operator shifts the bits of the operand to the left by
 * the specified number of places. This operator can be used to multiply a
 * number by a power of 2.
 * @param   {number} n Input number.
 * @returns {number}   Returns value.
 */
export const multiplyByTwo = n => n << 1

/**
 * Bitwise Right shift.
 *
 * @description This operator shifts the bits of the operand to the right by
 * the specified number of places. This operator can be used to divide a
 * number by a power of 2.
 * @param   {number} n Input number.
 * @returns {number}   Returns value.
 */
export const divideByTwo = n => n >> 1
