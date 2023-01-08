/**
 * Count the words of a given string where the key is word, and value is count.
 * @param {*} str
 * @returns {object}
 */
function countWords(str) {
  /**
   * @type {*}
   */
  let count = {};

  if (str.length <= 0) {
    return {};
  } else {
    /**
     * @const {*}
     */
    const words = str.split(' ');
    for (const word in words) {
      count[words[word]] = count[words[word]] ? count[words[word]] + 1 : 1;
    }
  }

  // make sure to return
  return count;
}

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
