/**
 * ECG Program captures heart-rate.
 *
 * @description
 * It doesn't indicate whether the rates are normal or bad rhythms.
 * If a heart-rate is less than 60 bpm, it is Bradycardic.
 * If a heart-rate is greater than 100 bpm, it is Tachycardic.
 * Normal heart-rates are in between these rates.
 * @param   {number[]}   data Input numeric data.
 * @returns {Array<any>}      Output classified data.
 */
function diagnoseRates(data) {
  const patients = []
  const lowHR = 'Bradycardia: '
  const highHR = 'Tachycardia: '
  const normHR = 'Normal: '

  for (let i = 0; i < data.length; i++) {
    const currentPatient = data[i]
    if (currentPatient < 60)
      patients.push(`${lowHR}${currentPatient}`)

    else if (currentPatient > 100)
      patients.push(`${highHR}${currentPatient}`)

    else patients.push(`${normHR}${currentPatient}`)
  }
  return patients
}

function assertEqualArrays(array1, array2, testName) {
  if (JSON.stringify(array1) === JSON.stringify(array2))
    console.log('passed')

  else
    console.log(`test failed: ${testName}`)
}

const heartRates = [63, 117, 52, 121, 67, 43]
const actual = diagnoseRates(heartRates)
const expected = [
  'Normal: 63',
  'Tachycardia: 117',
  'Bradycardia: 52',
  'Tachycardia: 121',
  'Normal: 67',
  'Bradycardia: 43',
]
assertEqualArrays(actual, expected, 'function should return correct heartrates and diagnoses')

const heartRates2 = [161, 90, 65, 45, 101, 59]
const actual2 = diagnoseRates(heartRates2)
const expected2 = [
  'Tachycardia: 161',
  'Normal: 90',
  'Normal: 65',
  'Bradycardia: 45',
  'Tachycardia: 101',
  'Bradycardia: 59',
]
assertEqualArrays(actual2, expected2, 'function should return correct heartrates and diagnoses')
