/**
 * Given a numeric score, return a string representing the corresponding letter grade.
 *
 * @param   {number} score Input numeric score.
 * @returns {string}       Return 'INVALID SCORE' or letter grade.
 */
function convertScoreToGrade(score) {
  let grade = ''

  switch (true) {
    case (score <= 100 && score >= 90):
      grade = 'A'
      break
    case (score <= 89 && score >= 80):
      grade = 'B'
      break
    case (score <= 79 && score >= 70):
      grade = 'C'
      break
    case (score <= 69 && score >= 60):
      grade = 'D'
      break
    case (score <= 59 && score >= 0):
      grade = 'F'
      break
    default:
      grade = 'INVALID SCORE'
      break
  }

  return grade
}

const output = convertScoreToGrade(76)
console.log(output) // --> 'A'

export { convertScoreToGrade }
