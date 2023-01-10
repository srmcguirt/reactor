/**
 * Given 3 words, return the longest one.
 *
 * @param   {string} word1 The first word.
 * @param   {string} word2 The second word.
 * @param   {string} word3 The third word.
 * @returns {string}       The longest word.
 */
function getLongestOfThreeWords(word1, word2, word3) {
  const words = [word1, word2, word3]
    .sort((a, b) => b.length - a.length)

  return words[0]
}

export { getLongestOfThreeWords }
