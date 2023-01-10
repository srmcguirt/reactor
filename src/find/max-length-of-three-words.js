/**
 * Given 3 words, return the length of the longest one.
 *
 * @param   {string} word1 The first word.
 * @param   {string} word2 The second word.
 * @param   {string} word3 The third word.
 * @returns {number}       The length of the longest word.
 */
function findMaxLengthOfThreeWords(word1, word2, word3) {
  /** @type {string[]} */
  const arr = [word1, word2, word3]

  const mappedArr = arr.map((value) => {
    return { length: value.length }
  })
  // find the longest word by sorting the array by length
  const reduced = mappedArr.reduce((prev, curr) => {
    return prev.length > curr.length ? prev : curr
  })

  return reduced.length
}

export { findMaxLengthOfThreeWords }
