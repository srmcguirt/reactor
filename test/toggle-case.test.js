import { describe, expect, it } from 'vitest'
import { toggleCase } from '../src/toggle-case.js'

describe('Test values that should:', () => {
  const tests = [
    { name: 'Toggle character case', input: 'Hello World', output: 'hELLO wORLD' },
    { name: 'Respect special characters', input: '"VeTprEp!', output: '"vEtPReP!' },
    { name: 'Respect spaces', input: 'Good news, everyone!', output: 'gOOD NEWS, EVERYONE!' },
  ]

  for (const test of tests) {
    it(test.name, () => {
      expect(toggleCase(test.input)).eq(test.output)
    })
  }
})
