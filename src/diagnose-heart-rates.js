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
function diagnoseHeartRates(data) {
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

export { diagnoseHeartRates }
