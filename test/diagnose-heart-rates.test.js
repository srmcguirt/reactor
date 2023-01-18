import { describe, expect, it } from 'vitest'
import { diagnoseHeartRates } from '../src/diagnose-heart-rates'

describe('Test values that should:', () => {
  const tests = [
    { name: 'Check normal rate', input: [90], output: ['Normal: 90'] },
    { name: 'Check low rate', input: [45], output: ['Bradycardia: 45'] },
    { name: 'Check high rate', input: [161], output: ['Tachycardia: 161'] },
    {
      name: 'Check multiple rates',
      input: [161, 90, 65, 45, 101, 59],
      output: [
        'Tachycardia: 161',
        'Normal: 90',
        'Normal: 65',
        'Bradycardia: 45',
        'Tachycardia: 101',
        'Bradycardia: 59',
      ],
    },
  ]

  for (const test of tests) {
    it(test.name, () => {
      expect(diagnoseHeartRates(test.input)).toStrictEqual(test.output)
    })
  }
})
