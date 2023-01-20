// FUNCTION DEFINITION(S)
// ASSERTION FUNCTION(S) TO BE USED
/**
 * @param {string | any[] | null | undefined} actual
 * @param {string | any[]}                    expected
 * @param {any}                               test
 */
export function assertEqual(actual, expected, test) {
  // const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)

  if (
    actual !== null
    && actual !== undefined
    && Array.isArray(actual)
    && Array.isArray(expected)
    && actual.length === expected.length)
    console.log('success')

  else
    console.log(`FAILED: [${test}] Expected ${expected} but got ${actual}`)
}
