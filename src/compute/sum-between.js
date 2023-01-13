/**
 * Compute sum between given numbers.
 *
 * @param   {number} num1 Input lower range number.
 * @param   {number} num2 Input upper range number.
 * @returns {number}      Sum of number range.
 */
function computeSumBetween(num1, num2) {
  let sum = 0

  if (!(num2 > num1) || num2 === num1)
    return sum

  for (let i = num1; i < num2; i++)
    sum += i

  return sum
}

export { computeSumBetween }
