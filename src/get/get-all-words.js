/**
 * Given a sentence, and return as array containing every word.
 *
 * @param   {string}   string Input string.
 * @returns {string[]}        Array of words.
 */
function getAllWords(string) {
  if (string.length === 0)
    return []

  return string.split(' ')
}

export { getAllWords }
