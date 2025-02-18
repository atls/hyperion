/* eslint-disable n/no-sync */

import assert                             from 'node:assert/strict'
import { readFileSync }                   from 'node:fs'
import { mkdirSync }                      from 'node:fs'
import { rmdirSync }                      from 'node:fs'
import { existsSync }                     from 'node:fs'
import * as path                          from 'node:path'
import { describe }                       from 'node:test'
import { after }                          from 'node:test'
import { it }                             from 'node:test'

import { pretty }                         from '@atls-ui-generators/utils'

import { ButtonAppearanceStyleGenerator } from '../style-generators/index.js'

const dirname = path.dirname(new URL(import.meta.url).pathname)

describe('button appearance styles generator', () => {
  const colors: Record<string, string> = {
    'button.blue.default.font': 'rgba(255, 255, 255, 1)',
    'button.blue.default.background': 'rgba(65, 109, 223, 1)',
    'button.blue.default.border': 'rgba(0,0,0,0)',
    'button.blue.hover.font': 'rgba(255, 255, 255, 1)',
    'button.blue.hover.background': 'rgba(0, 66, 236, 1)',
    'button.blue.hover.border': 'rgba(0,0,0,0)',
    'button.blue.pressed.font': 'rgba(255, 255, 255, 1)',
    'button.blue.pressed.background': 'rgba(0, 66, 236, 1)',
    'button.blue.pressed.border': 'rgba(0,0,0,0)',
    'button.blue.disabled.font': 'rgba(138, 138, 138, 1)',
    'button.blue.disabled.background': 'rgba(212, 212, 212, 1)',
    'button.blue.disabled.border': 'rgba(0,0,0,0)',

    'button.lightBlue.default.font': 'rgba(255, 255, 255, 1)',
    'button.lightBlue.default.background': 'rgba(84, 169, 235, 1)',
    'button.lightBlue.default.border': 'rgba(0,0,0,0)',
    'button.lightBlue.hover.font': 'rgba(255, 255, 255, 1)',
    'button.lightBlue.hover.background': 'rgba(84, 169, 235, 0.8)',
    'button.lightBlue.hover.border': 'rgba(0,0,0,0)',
    'button.lightBlue.pressed.font': 'rgba(255, 255, 255, 1)',
    'button.lightBlue.pressed.background': 'rgba(84, 169, 235, 1)',
    'button.lightBlue.pressed.border': 'rgba(0,0,0,0)',
    'button.lightBlue.disabled.font': 'rgba(255, 255, 255, 1)',
    'button.lightBlue.disabled.background': 'rgba(221, 221, 221, 1)',
    'button.lightBlue.disabled.border': 'rgba(0,0,0,0)',
  }

  const expectedCode = `import { vars } from '@ui/theme'
import { createAppearanceStyles } from '@atls-ui-parts/button'

const appearanceBlueDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['button.blue.default.font'],
  backgroundColor: vars.colors['button.blue.default.background'],
  borderColor: vars.colors['button.blue.default.border'],
})

const appearanceBlueHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['button.blue.hover.font'],
  backgroundColor: vars.colors['button.blue.hover.background'],
  borderColor: vars.colors['button.blue.hover.border'],
})

const appearanceBluePressedStyles = createAppearanceStyles({
  fontColor: vars.colors['button.blue.pressed.font'],
  backgroundColor: vars.colors['button.blue.pressed.background'],
  borderColor: vars.colors['button.blue.pressed.border'],
})

const appearanceBlueDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['button.blue.disabled.font'],
  backgroundColor: vars.colors['button.blue.disabled.background'],
  borderColor: vars.colors['button.blue.disabled.border'],
})

const appearanceLightBlueDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['button.lightBlue.default.font'],
  backgroundColor: vars.colors['button.lightBlue.default.background'],
  borderColor: vars.colors['button.lightBlue.default.border'],
})

const appearanceLightBlueHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['button.lightBlue.hover.font'],
  backgroundColor: vars.colors['button.lightBlue.hover.background'],
  borderColor: vars.colors['button.lightBlue.hover.border'],
})

const appearanceLightBluePressedStyles = createAppearanceStyles({
  fontColor: vars.colors['button.lightBlue.pressed.font'],
  backgroundColor: vars.colors['button.lightBlue.pressed.background'],
  borderColor: vars.colors['button.lightBlue.pressed.border'],
})

const appearanceLightBlueDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['button.lightBlue.disabled.font'],
  backgroundColor: vars.colors['button.lightBlue.disabled.background'],
  borderColor: vars.colors['button.lightBlue.disabled.border'],
})

export const appearanceVariant = {
  blue: appearanceBlueDefaultStyles,
  lightBlue: appearanceLightBlueDefaultStyles,
}

export const appearanceHover = {
  blueHover: appearanceBlueHoverStyles,
  lightBlueHover: appearanceLightBlueHoverStyles,
}

export const appearancePressed = {
  bluePressed: appearanceBluePressedStyles,
  lightBluePressed: appearanceLightBluePressedStyles,
}

export const appearanceDisabled = {
  blueDisabled: appearanceBlueDisabledStyles,
  lightBlueDisabled: appearanceLightBlueDisabledStyles,
}
`
  after(() => {
    if (existsSync(`${dirname}/generated`)) rmdirSync(`${dirname}/generated`, { recursive: true })
  })

  it('should generate code for appearance styles', () => {
    const generator = new ButtonAppearanceStyleGenerator(colors)
    const generated = generator.generateAppearanceStyles()

    const code = pretty(`
      ${generated.imports}     
      ${generated.statefulStyles}      
      ${generated.appearanceStyles}
      `)

    assert.equal(code, expectedCode)
  })

  it('should fail if path ends with slash character', () => {
    const generator = new ButtonAppearanceStyleGenerator(colors)

    if (!existsSync(`${dirname}/generated`)) mkdirSync(`${dirname}/generated`)

    assert.throws(() => {
      generator.generateFile(`${dirname}/generated/`)
    })
  })

  it('should generate appearance styles file', () => {
    const generator = new ButtonAppearanceStyleGenerator(colors)

    if (!existsSync(`${dirname}/generated`)) mkdirSync(`${dirname}/generated`)

    generator.generateFile(`${dirname}/generated`)

    const code = readFileSync(`${dirname}/generated/appearance.css.ts`)

    assert.equal(Buffer.from(code).toString(), expectedCode)
  })
})
