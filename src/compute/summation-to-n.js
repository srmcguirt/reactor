/**
 * Given a number, return the sum of sequential numbers leading up to the given number.
 *
 * @description Beginning at 0.
 * @param   {number} n Input number.
 * @returns {number}   Returns zero or summation.
 */
function computeSummationToN(n) {
  if (n <= 0)
    return 0

  let summation = 0

  for (let i = 1; i < n + 1; i++)
    summation += i

  return summation
}

export { computeSummationToN }
