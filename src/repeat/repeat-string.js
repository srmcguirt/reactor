/**
 * Repeat given string consecutively number of times by given number.
 *
 * @param   {string} string Input string to repeat.
 * @param   {number} num    Repetition number.
 * @returns {string}        Return formatted string.
 */
function repeatString(string, num) {
  let s = ''

  for (let i = 0; i < num; i++) {
    console.log(i)
    s += string
  }

  return s
}

export { repeatString }
