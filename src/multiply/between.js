/**
 * Given a range of inputs, return the product of numbers.
 *
 * @param   {number} num1 Input lower range number.
 * @param   {number} num2 Input upper range number.
 * @returns {number}      Product of number range.
 */
function multiplyBetween(num1, num2) {
  let product = 1

  if (!(num2 > num1) || num2 === num1)
    return 0

  for (let i = num1; i < num2; i++)
    product *= i

  return product
}

export { multiplyBetween }
