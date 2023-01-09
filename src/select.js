/**
 * Given an array and object, return keys in both.
 *
 * @param   {Array<string>}       array  Input array.
 * @param   {Object<string, any>} object Input object.
 * @returns {Object<string, any>}        New object with keys from both inputs.
 */
function select(array, object) {
  // If keys in array, but not in object, then ignore.
  /**
   * @constant {Object<string, any>} newObj
   */
  const newObject = { ...object }
  /**
   * Check if key is in array.
   *
   * @param   {string}             string Input string.
   * @returns {string | undefined}        If found key returns string.
   */
  const hasKey = string => array.find(e => e === string)

  for (const element in newObject) {
    if (!hasKey(String(element)))
      delete newObject[element]
  }

  return newObject
}

const array = ['a', 'c', 'e']
const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}
const output = select(array, object)
console.log(output) // --> { a: 1, c: 3 }
