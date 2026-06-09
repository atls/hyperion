import { dirname }                  from 'node:path'
import { join }                     from 'node:path'
import { describe }                 from 'node:test'
import { it }                       from 'node:test'
import { fileURLToPath }            from 'node:url'

import { AppearanceMapGenerator }   from '@atls-ui-generators/appearance'
import { AppearanceStyleGenerator } from '@atls-ui-generators/appearance'

import { colors }                   from '../../../../../ui-parts/theme/src/tokens/colors.js'

const currentDir = dirname(fileURLToPath(import.meta.url))
const rootDir = join(currentDir, '../../../../..')

const partsThemeImport = { import: '{ vars }', from: '@atls-ui-parts/theme' }
const styleImport = { import: '{ style }', from: '@vanilla-extract/css' }
const createAppearanceStylesImport = {
  import: '{ createAppearanceStyles }',
  from: '@atls-ui-generators/appearance',
}

const checkContract = async (
  name: string,
  generator: AppearanceStyleGenerator | AppearanceMapGenerator,
  path: string
): Promise<void> => {
  try {
    await generator.checkFile(path)
  } catch (error) {
    throw new Error(`${name}: ${(error as Error).message}`)
  }
}

describe('component appearance contracts', () => {
  it('checks generated appearance files', async () => {
    await checkContract(
      'button',
      new AppearanceStyleGenerator('button', colors, {
        extraImports: [{ import: '{ ButtonAppearance }', from: './interfaces.js', kind: 'type' }],
        varsImport: partsThemeImport,
        createAppearanceStylesImport,
        states: ['default', 'hover', 'pressed', 'disabled'],
        variants: ['blue', 'lightBlue', 'ghost'],
        stateOverrides: {
          ghost: {
            fontColor: "'inherit'",
            backgroundColor: "'transparent'",
            border: "'none'",
          },
        },
        appearanceExport: {
          name: 'buttonAppearances',
          typeName: 'ButtonAppearance',
          states: {
            default: 'default',
            hover: 'hover',
            pressed: 'pressed',
            disabled: 'disabled',
          },
        },
      }),
      join(rootDir, 'ui-parts/button/src/styles')
    )

    await checkContract(
      'input',
      new AppearanceStyleGenerator('input', colors, {
        extraImports: [{ import: '{ InputAppearance }', from: './interfaces.js', kind: 'type' }],
        varsImport: partsThemeImport,
        createAppearanceStylesImport,
        states: ['default', 'disabled'],
        variants: ['blue', 'white'],
        appearanceExport: {
          name: 'inputAppearances',
          typeName: 'InputAppearance',
          states: {
            default: 'default',
            disabled: 'disabled',
          },
        },
      }),
      join(rootDir, 'ui-parts/input/src/styles')
    )

    await checkContract(
      'checkbox box',
      new AppearanceMapGenerator({
        imports: [partsThemeImport, styleImport],
        styles: [
          { name: 'boxBlueAppearanceStyles', properties: { border: 'vars.borders.normalBlue' } },
          { name: 'boxGreenAppearanceStyles', properties: { border: 'vars.borders.normalGreen' } },
          { name: 'boxRedAppearanceStyles', properties: { border: 'vars.borders.normalRed' } },
        ],
        exports: [
          {
            name: 'boxAppearanceStyles',
            entries: {
              blue: 'boxBlueAppearanceStyles',
              green: 'boxGreenAppearanceStyles',
              red: 'boxRedAppearanceStyles',
            },
          },
        ],
      }),
      join(rootDir, 'ui-parts/checkbox/src/box/styles')
    )

    await checkContract(
      'checkbox check',
      new AppearanceMapGenerator({
        imports: [partsThemeImport, styleImport],
        styles: [
          {
            name: 'checkBlueAppearanceStyles',
            properties: { backgroundColor: 'vars.colors.blue' },
          },
          {
            name: 'checkGreenAppearanceStyles',
            properties: { backgroundColor: 'vars.colors.green' },
          },
          {
            name: 'checkRedAppearanceStyles',
            properties: { backgroundColor: 'vars.colors.red' },
          },
        ],
        exports: [
          {
            name: 'checkAppearanceStyles',
            entries: {
              blue: 'checkBlueAppearanceStyles',
              green: 'checkGreenAppearanceStyles',
              red: 'checkRedAppearanceStyles',
            },
          },
        ],
      }),
      join(rootDir, 'ui-parts/checkbox/src/check')
    )

    await checkContract(
      'checkbox label',
      new AppearanceMapGenerator({
        imports: [styleImport],
        styles: [
          {
            exported: true,
            name: 'labelAppearanceStyles',
            properties: { color: "'black'" },
          },
        ],
      }),
      join(rootDir, 'ui-parts/checkbox/src/label/styles')
    )

    await checkContract(
      'checkbox',
      new AppearanceMapGenerator({
        imports: [
          { import: '{ CheckboxAppearance }', from: '../checkbox.interfaces.js', kind: 'type' },
          { import: '{ CheckboxAppearanceName }', from: '../checkbox.interfaces.js', kind: 'type' },
          { import: '{ boxAppearanceStyles }', from: '../box/index.js' },
          { import: '{ checkAppearanceStyles }', from: '../check/index.js' },
          { import: '{ labelAppearanceStyles }', from: '../label/index.js' },
        ],
        exports: [
          {
            name: 'checkboxAppearances',
            typeName: 'CheckboxAppearance',
            variantsType: 'CheckboxAppearanceName',
            entries: {
              blue: `{
                box: boxAppearanceStyles.blue,
                check: checkAppearanceStyles.blue,
                label: labelAppearanceStyles,
              }`,
              green: `{
                box: boxAppearanceStyles.green,
                check: checkAppearanceStyles.green,
                label: labelAppearanceStyles,
              }`,
              red: `{
                box: boxAppearanceStyles.red,
                check: checkAppearanceStyles.red,
                label: labelAppearanceStyles,
              }`,
            },
          },
        ],
      }),
      join(rootDir, 'ui-parts/checkbox/src/styles')
    )
  })
})
