import type { StyleSchema } from '@atls-ui-generators/appearance'

export const schema: StyleSchema = {
  files: [
    {
      type: 'style',
      target: '.',
      imports: [
        {
          kind: 'type',
          import: '{ InputAppearance }',
          from: './interfaces.js',
        },
      ],
      prefix: 'input',
      states: ['default', 'disabled'],
      variants: ['blue', 'white'],
      export: {
        name: 'inputAppearances',
        typeName: 'InputAppearance',
        states: {
          default: 'default',
          disabled: 'disabled',
        },
      },
    },
  ],
}

export default schema
