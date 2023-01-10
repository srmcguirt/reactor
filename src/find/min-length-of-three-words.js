/**
 * Given 3 words, return the length of the shortest one.
 *
 * @param   {string} word1 The first word.
 * @param   {string} word2 The second word.
 * @param   {string} word3 The third word.
 * @returns {number}       The length of the shortest word.
 */
function findMinLengthOfThreeWords(word1, word2, word3) {
  /** @constant {string[]} */
  const arr = [word1, word2, word3]

  /** @constant {Object<string,number>} */
  const mappedArr = arr.map((value) => {
    return { length: value.length }
  })

  /** @constant {Object<string,number>} */
  const reduced = mappedArr.reduce((prev, curr) => {
    return prev.length < curr.length ? prev : curr
  })

  return reduced.length
}

export { findMinLengthOfThreeWords }
