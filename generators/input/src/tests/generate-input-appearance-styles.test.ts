/* eslint-disable n/no-sync */

import { readFileSync }                  from 'fs'
import { rmdirSync }                     from 'fs'
import { mkdirSync }                     from 'fs'
import { existsSync }                    from 'fs'

import { pretty }                        from '@atls-ui-generators/utils'

import { InputAppearanceStyleGenerator } from '../style-generators/index.js'
import { testCases }                     from './generate-input-appearance-styles.constants.js'

describe('input generator', () => {
  describe('appearance styles generator', () => {
    afterAll(() => {
      if (existsSync(`${__dirname}/generated`))
        rmdirSync(`${__dirname}/generated`, { recursive: true })
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

        expect(code).toBe(expectedCode)
      })

      it(`${testCaseName} should fail if path ends with slash character`, () => {
        const generator = new InputAppearanceStyleGenerator(colors)

        if (!existsSync(`${__dirname}/generated`)) mkdirSync(`${__dirname}/generated`)

        expect(() => {
          generator.generateFile(`${__dirname}/generated/`)
        }).toThrow()
      })

      it(`${testCaseName} should generate appearance styles file`, () => {
        const generator = new InputAppearanceStyleGenerator(colors)

        if (!existsSync(`${__dirname}/generated`)) mkdirSync(`${__dirname}/generated`)

        generator.generateFile(`${__dirname}/generated`)

        const code = readFileSync(`${__dirname}/generated/appearance.css.ts`)

        expect(Buffer.from(code).toString()).toBe(expectedCode)
      })
    })
  })
})
