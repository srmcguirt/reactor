/**
 * Given an array and object, return keys in both.
 * @param {Array<string>} arr
 * @param {object} obj
 * @returns {object} newObj
 */
function select(arr, obj) {
  // If keys in array, but not in object, then ignore.
  /**
   * @type {object} newObj
   */
  let newObj = { ...obj };
  /**
   *
   * @param {string} str
   * @return {string | undefined} hasKey
   */
  const hasKey = (str) => arr.find((e) => e === str);

  for (const e in newObj) {
    if (!hasKey(String(e))) {
      delete newObj[e];
    }
  }

  return newObj;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
