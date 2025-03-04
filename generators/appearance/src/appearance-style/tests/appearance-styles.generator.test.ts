/* eslint-disable n/no-sync */

import assert                       from 'node:assert/strict'
import { readFileSync }             from 'node:fs'
import { mkdirSync }                from 'node:fs'
import { rmdirSync }                from 'node:fs'
import { existsSync }               from 'node:fs'
import { describe }                 from 'node:test'
import { after }                    from 'node:test'
import { it }                       from 'node:test'

import { AppearanceStyleGenerator } from '@atls-ui-generators/appearance'
import { pretty }                   from '@atls-ui-generators/utils'

import { dirname }                  from './appearance-styles.generator.test.constants.js'
import { testCases }                from './appearance-styles.generator.test.constants.js'

describe('input appearance styles generator', () => {
  after(() => {
    if (existsSync(`${dirname}/generated`)) rmdirSync(`${dirname}/generated`, { recursive: true })
  })

  testCases.forEach(({ prefix, colors, expectedCode, expectedError }, index) => {
    const testCaseName = `Test case ${index + 1}:`

    if (expectedCode) {
      it(`${testCaseName} should generate code for appearance styles`, async () => {
        const generator = new AppearanceStyleGenerator(prefix, colors)
        const generated = await generator.generateAppearanceStyles()

        const code = await pretty(`
          ${generated.imports}
          ${generated.statefulStyles}
          ${generated.appearanceStyles}
          `)

        assert.equal(code, expectedCode)
      })

      it(`${testCaseName} should fail if path ends with slash character`, async () => {
        const generator = new AppearanceStyleGenerator(prefix, colors)

        if (!existsSync(`${dirname}/generated`)) mkdirSync(`${dirname}/generated`)

        await assert.rejects(async () => generator.generateFile(`${dirname}/generated/`))
      })

      it(`${testCaseName} should generate appearance styles file`, async () => {
        const generator = new AppearanceStyleGenerator(prefix, colors)

        if (!existsSync(`${dirname}/generated`)) mkdirSync(`${dirname}/generated`)

        await generator.generateFile(`${dirname}/generated`)

        const code = readFileSync(`${dirname}/generated/appearance.css.ts`)

        assert.equal(Buffer.from(code).toString(), expectedCode)
      })
    }

    if (expectedError) {
      it(`${testCaseName} should throw error`, async () => {
        assert.throws(
          () => new AppearanceStyleGenerator(prefix, colors),
          (error) => {
            assert.ok(error instanceof Error, 'Error should be an instance of Error')
            assert.ok(
              error.message.includes(expectedError),
              `Error message should include ${expectedError}, case: ${testCaseName}, message: ${error.message}`
            )
            return true
          }
        )
      })
    }
  })
})
