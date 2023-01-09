/**
 * Given a word, return an array containing every character in the word.
 *
 * @param   {string}   string Input string.
 * @returns {string[]}        Array of characters.
 */
function getAllLetters(string) {
  if (string.length === 0)
    return []

  return string.split('')
}

export { getAllLetters }
