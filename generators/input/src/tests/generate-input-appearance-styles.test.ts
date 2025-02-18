/* eslint-disable n/no-sync */

import assert                            from 'node:assert/strict'
import { readFileSync }                  from 'node:fs'
import { mkdirSync }                     from 'node:fs'
import { rmdirSync }                     from 'node:fs'
import { existsSync }                    from 'node:fs'
import { describe }                      from 'node:test'
import { after }                         from 'node:test'
import { it }                            from 'node:test'

import { pretty }                        from '@atls-ui-generators/utils'

import { InputAppearanceStyleGenerator } from '../style-generators/index.js'
import { dirname }                       from './generate-input-appearance-styles.constants.js'
import { testCases }                     from './generate-input-appearance-styles.constants.js'

describe('input appearance styles generator', () => {
  after(() => {
    if (existsSync(`${dirname}/generated`)) rmdirSync(`${dirname}/generated`, { recursive: true })
  })

  testCases.forEach(({ colors, expectedCode }, index) => {
    const testCaseName = `Test case ${index + 1}:`

    it(`${testCaseName} should generate code for appearance styles`, () => {
      const generator = new InputAppearanceStyleGenerator(colors)
      const generated = generator.generateAppearanceStyles()

      const code = pretty(`
        ${generated.imports}     
        ${generated.statefulStyles}      
        ${generated.appearanceStyles}
        `)

      assert.equal(code, expectedCode)
    })

    it(`${testCaseName} should fail if path ends with slash character`, () => {
      const generator = new InputAppearanceStyleGenerator(colors)

      if (!existsSync(`${dirname}/generated`)) mkdirSync(`${dirname}/generated`)

      assert.throws(() => {
        generator.generateFile(`${dirname}/generated/`)
      })
    })

    it(`${testCaseName} should generate appearance styles file`, () => {
      const generator = new InputAppearanceStyleGenerator(colors)

      if (!existsSync(`${dirname}/generated`)) mkdirSync(`${dirname}/generated`)

      generator.generateFile(`${dirname}/generated`)

      const code = readFileSync(`${dirname}/generated/appearance.css.ts`)

      assert.equal(Buffer.from(code).toString(), expectedCode)
    })
  })
})
