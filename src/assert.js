/* eslint-disable no-var */
/**
 * Check values for expected results as a test.
 *
 * @param {any} actual   Actual result.
 * @param {any} expected Expected result.
 * @param {any} testName Test name or subject of testing.
 */
function assertEqual(actual, expected, testName) {
  if (actual === expected)
    console.log('passed')

  else
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
}

/**
 * Check arrays for expected results as a test.
 *
 * @param {any[]}          actual   Actual array result.
 * @param {string | any[]} expected Expected array result.
 * @param {any}            testName Test name or subject of testing.
 */
function assertArraysEqual(actual, expected, testName) {
  var isArray = Array.isArray

  if ((actual.length === expected.length)
      && (isArray(actual) && isArray(expected))
      && actual.every((value, index) => value === expected[index]))
    console.log('passed')

  else
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
}

/**
 * Check objects for expected results as a test.
 *
 * @param {any} actual   Actual object result.
 * @param {any} expected Expected object result.
 * @param {any} testName Test name or subject of testing.
 */
function assertObjectsEqual(actual, expected, testName) {
  var isObject = typeof actual === 'object'
  var notNull = actual !== null
  var stringify = JSON.stringify
  if (isObject
      && notNull
      && (stringify(actual) === stringify(expected)))
    console.log('passed')

  else
    console.log(`FAILED [${testName}] Expected ${stringify(expected)}, but got ${stringify(actual)}`)
}

/**
 * Check numeric values for expected range results as a test.
 *
 * @param {any} low      Expected lower bound of range.
 * @param {any} high     Expected higher bound of range.
 * @param {any} actual   Actual number result.
 * @param {any} testName Test name or subject of testing.
 */
function assertWithinRange(low, high, actual, testName) {
  var isNumber = typeof actual === 'number'
  var notNull = actual !== null || actual !== undefined
  var inRange = actual >= low && actual <= high

  if (
    isNumber
    && notNull
    && inRange
  )
    console.log('passed')

  else
    console.log(`FAILED [${testName}] "${actual}" not within range ${low} to ${high}`)
}

export { assertEqual, assertArraysEqual, assertObjectsEqual, assertWithinRange }
