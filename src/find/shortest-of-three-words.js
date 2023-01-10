/**
 * Given 3 strings, return the shortest one.
 *
 * @param   {string} word1 The first word.
 * @param   {string} word2 The second word.
 * @param   {string} word3 The third word.
 * @returns {string}       The shortest word.
 */
function findShortestOfThreeWords(word1, word2, word3) {
  const words = [word1, word2, word3].sort((a, b) => a.length - b.length)

  return words[0]
}

export { findShortestOfThreeWords }
