/**
 * Given an array of arrays, return a single array containing the elements of the nested array.
 *
 * @param   {any[]} arr Array inputs.
 * @returns {any[]}     Flat array.
 */
function joinArrayOfArrays(arr) {
  // or arr.concat(...arr)
  // or arr.reduce((acc, array) => { return [...acc, ...array]}, [])
  // or arr.forEach(array => { [].push(...array)})
  // or for ... loop with concat
  // flatten 1 level of arrays.
  return arr.flat(1)
}

const output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']])
console.log(output) // --> [1, 4, true, false, 'x', 'y']

export { joinArrayOfArrays }
