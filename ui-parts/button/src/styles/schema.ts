import type { StyleSchema } from '@atls-ui-generators/appearance'

export const schema: StyleSchema = {
  files: [
    {
      type: 'style',
      target: '.',
      imports: [
        {
          kind: 'type',
          import: '{ ButtonAppearance }',
          from: './interfaces.js',
        },
      ],
      prefix: 'button',
      states: ['default', 'hover', 'pressed', 'disabled'],
      variants: ['blue', 'lightBlue', 'ghost'],
      stateOverrides: {
        ghost: {
          fontColor: {
            kind: 'expression',
            value: "'inherit'",
          },
          backgroundColor: {
            kind: 'expression',
            value: "'transparent'",
          },
          border: {
            kind: 'expression',
            value: "'none'",
          },
        },
      },
      export: {
        name: 'buttonAppearances',
        typeName: 'ButtonAppearance',
        states: {
          default: 'default',
          hover: 'hover',
          pressed: 'pressed',
          disabled: 'disabled',
        },
      },
    },
  ],
}

export default schema
