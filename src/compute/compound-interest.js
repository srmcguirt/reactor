/**
 * Given corresponding inputs, return the amount of compound interest generated.
 *
 * @description Total compound interest generated is the final value minus the
 * initial principal.
 * @param   {number} p Input principal.
 * @param   {number} r Input nominal annual interest rate.
 * @param   {number} n Input compounding frequency or periods.
 * @param   {number} t Input time (in years).
 * @returns {number}   Return compound interest value.
 */
function computeCompoundInterest(p, r, n, t) {
  /** @constant {number} */
  const inner = 1 + (r / n)
  /** @constant {number} */
  const outer = n * t
  /** @constant {number} */
  const amountTotal = p * (inner ** outer)

  return amountTotal - p
}

export { computeCompoundInterest }
