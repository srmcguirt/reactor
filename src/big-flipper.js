/**
 * Return flipped string from given string and number of characters input.
 *
 * @param   {string} str Input string.
 * @param   {number} num Input number acting as grouping filter.
 * @returns {string}     Flipped string.
 */
function bigFlipper(str, num) {
  /** @type {string} */
  let result = ''

  for (let i = 0; i < str.length; i += num)
    result += str.slice(i, i + num).split('').reverse().join('')

  return result
}

console.log(bigFlipper('treatfinedbeets', 5))
