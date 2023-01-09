/**
 * Count the words of a given string where the key is word, and value is count.
 *
 * @param   {string}                 string Input string.
 * @returns {Object<string, number>}        Object of word and count values.
 */
function countWords(string) {
  /**
   * @type {Object<string, number>}
   */
  const count = {}

  if (string.length <= 0) {
    return {}
  }
  else {
    /**
     * @constant {string[]}
     */
    const words = string.split(' ')
    for (const word in words)
      count[words[word]] = count[words[word]] ? count[words[word]] + 1 : 1
  }

  // make sure to return
  return count
}

export { countWords }
