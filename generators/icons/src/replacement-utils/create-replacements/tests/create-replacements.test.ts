import assert                 from 'node:assert/strict'
import { describe }           from 'node:test'
import { it }                 from 'node:test'

import { createReplacements } from '../index.js'
import { testCases }          from './create-replacements.test.constants.js'

describe('icons generators create-replacements util', () => {
  testCases.forEach(({ replacementIcons, expectedResult }, index) => {
    const testCaseName = `Test case ${index + 1}:`

    it(`${testCaseName} should create replacements`, async () => {
      const replacement = createReplacements(replacementIcons)

      assert.deepEqual(replacement, expectedResult)
    })
  })
})
