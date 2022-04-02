import { writeFileSync }            from 'fs'

import * as prettierPlugin          from '@atls/prettier-plugin'
import prettierConfig               from '@atls/config-prettier'
import parserBabel                  from 'prettier/parser-babel'
import parserTypescript             from 'prettier/parser-typescript'
import { format }                   from 'prettier/standalone'
import { generateAppearanceStyles } from '../style-generators'

const pretty = (string) =>
  format(string, {
    ...prettierConfig,
    parser: 'babel',
    plugins: [parserTypescript, parserBabel, prettierPlugin],
  })

describe('button generator', () => {
  describe('appearance styles generator', () => {
    const theme = {
      colors: {
        button: {
          primary: {
            default: {
              background: 'black',
              font: 'white',
              border: 'black',
            },
            hover: {
              background: 'white',
              font: 'black',
              border: 'white',
            },
            pressed: {
              background: 'white',
              font: 'black',
              border: 'white',
            },
            disabled: {
              background: 'gray',
              font: 'white',
              border: 'gray',
            },
          },
          secondary: {
            default: {
              background: 'white',
              font: 'black',
              border: 'white',
            },
            hover: {
              background: 'black',
              font: 'white',
              border: 'black',
            },
            pressed: {
              background: 'black',
              font: 'white',
              border: 'black',
            },
            disabled: {
              background: 'gray',
              font: 'white',
              border: 'gray',
            },
          },
        },
      },
    }

    test('it should generate code for appearance styles', () => {
      const generated = generateAppearanceStyles(theme.colors.button)

      const code = `
 import { switchProp } from 'styled-tools'
 import { ifProp } from 'styled-tools'
 import { prop } from 'styled-tools'
 import { createAppearanceStyles } from '@atls-ui-parts/button'
      
      ${generated.statefulStyles}
      
      ${generated.appearanceStyles}
      `
      writeFileSync(`${__dirname}/code.ts`, pretty(code))
      expect(code).toBe('')
    })
  })
})
