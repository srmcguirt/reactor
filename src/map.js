import { toObject } from "./to/object"

/**
 * Polyfill Map function, should behave like builtin Array function.
 *
 * @description It should iterate over the input array and apply a callback
 * function to each element. It should then return a new array whose elements
 * are the result of applying the callback function to each element in the
 * input array.
 * @param   {[]}       array            Input array.
 * @param   {Function} callbackFunction Iteration function.
 * @returns {[]}
 * @example
 * map([1, 2, 3], addOne) ==> [2, 3, 4]
 */
function map(cb [, thisArg]) {

}

function cubeAll(numbers) {
  return map(numbers, (n) => {
    return n * n
  })
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual() {

}
// TESTS CASES
