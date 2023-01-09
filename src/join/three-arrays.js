/**
 * Joins three arrays into one.
 *
 * @param   {Array<any>} arr1 The first array to join.
 * @param   {Array<any>} arr2 The second array to join.
 * @param   {Array<any>} arr3 The third array to join.
 * @returns {Array<any>}      The joined array.
 */
function joinThreeArrays(arr1, arr2, arr3) {
  return arr1.concat(arr2, arr3)
}

export { joinThreeArrays }
