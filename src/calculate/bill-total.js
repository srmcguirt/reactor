/**
 * Given the pre tax and tip amount of a meal, return the total amount due after tax and tip.
 *
 * @description Sales tax is assumed at 9.5% and tip at 15%.
 * @param   {number} amount Pre-Tax and tip amount.
 * @returns {number}        Amount due.
 */
function calculateBillTotal(amount) {
  /** @constant {number} */
  const tipRate = 0.15
  /** @constant {number} */
  const taxRate = 0.095
  /** @constant {number} */
  const tipAmount = amount * tipRate
  /** @constant {number} */
  const taxAmount = amount * taxRate
  return amount + tipAmount + taxAmount
}

export { calculateBillTotal }
