/**
 * Compute factorial of given number.
 *
 * @param   {number} n Input number.
 * @returns {number}   Returned factorial.
 */
function computeFactorialOfN(n) {
  if (n <= 0)
    return 0

  let f = 1

  for (let i = 1; i < n; i++) {
    console.log(i)
    f *= i
  }

  return f
}

export { computeFactorialOfN }
