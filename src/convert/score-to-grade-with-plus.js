/**
 * Given a numeric score, return a string representing the corresponding letter grade.
 *
 * @param   {number} score Input numeric score with plus/minus.
 * @returns {string}       Return 'INVALID SCORE' or letter grade.
 */
function convertScoreToGradeWithPlusAndMinus(score) {
  let grade = ''

  /** @constant {any[]} */
  const arr = [
    { grade: 'A', min: 90, max: 100 },
    { grade: 'B', min: 80, max: 89 },
    { grade: 'C', min: 70, max: 79 },
    { grade: 'D', min: 60, max: 69 },
    { grade: 'F', min: 0, max: 59 },
  ]

  /**
   * Check for value in range of object min and max values.
   *
   * @param   {number}           n Input number to filter.
   * @param   {Object<any, any>} v Input object to test against.
   * @returns {boolean}            Returns true if in range of values.
   */
  const inRange = (n, v) => n >= v.min && n <= v.max
  const f = arr.find(v => v.grade === 'F')

  if (score > 100 || score < 0) {
    return 'INVALID SCORE'
  }
  else if (score === undefined) {
    return 'INVALID SCORE'
  }
  else if (inRange(score, f)) {
    return f.grade
  }
  else {
    const filtered = arr.filter(v => inRange(score, v))

    const g = filtered[0]

    if (score >= g.min && score <= (g.min + 2))
      grade = `${g.grade}-`

    else if (score >= (g.max - 2) && score <= g.max)
      grade = `${g.grade}+`

    else
      grade = `${g.grade}`
  }

  return grade
}

console.log(convertScoreToGradeWithPlusAndMinus(67))

export { convertScoreToGradeWithPlusAndMinus }
