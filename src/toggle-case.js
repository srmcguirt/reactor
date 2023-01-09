/**
 * Toggle case of each character in a string, while respecting other characters.
 *
 * @param   {string} str String to toggle case.
 * @returns {string}     String with toggled case.
 * @example
 *
 *  ```js
 *  var exampleStr = 'hELLO wORLD !@#$%'
 *  toggleCase(exampleStr)
 *  ```
 */
function toggleCase(str) {
  /** @constant {string[]} */
  const arr = str.split('')

  /** @type {string[]} */
  const result = []

  for (const char in arr) {
    arr[char] === arr[char].toUpperCase()
      ? result[char] = arr[char].toLowerCase()
      : result[char] = arr[char].toUpperCase()
  }

  return result.join('')
}

export { toggleCase }
