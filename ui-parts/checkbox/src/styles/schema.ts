import type { StyleSchema } from '@atls-ui-generators/appearance'

export const schema: StyleSchema = {
  files: [
    {
      type: 'map',
      target: '../box/styles',
      imports: [
        {
          import: '{ style }',
          from: '@vanilla-extract/css',
        },
        {
          import: '{ vars }',
          from: '@atls-ui-parts/theme',
        },
      ],
      styles: [
        {
          name: 'boxBlueAppearanceStyles',
          properties: {
            border: {
              kind: 'expression',
              value: 'vars.borders.normalBlue',
            },
          },
        },
        {
          name: 'boxGreenAppearanceStyles',
          properties: {
            border: {
              kind: 'expression',
              value: 'vars.borders.normalGreen',
            },
          },
        },
        {
          name: 'boxRedAppearanceStyles',
          properties: {
            border: {
              kind: 'expression',
              value: 'vars.borders.normalRed',
            },
          },
        },
      ],
      exports: [
        {
          name: 'boxAppearanceStyles',
          entries: {
            blue: {
              kind: 'expression',
              value: 'boxBlueAppearanceStyles',
            },
            green: {
              kind: 'expression',
              value: 'boxGreenAppearanceStyles',
            },
            red: {
              kind: 'expression',
              value: 'boxRedAppearanceStyles',
            },
          },
        },
      ],
    },
    {
      type: 'map',
      target: '../check',
      imports: [
        {
          import: '{ style }',
          from: '@vanilla-extract/css',
        },
        {
          import: '{ vars }',
          from: '@atls-ui-parts/theme',
        },
      ],
      styles: [
        {
          name: 'checkBlueAppearanceStyles',
          properties: {
            backgroundColor: {
              kind: 'expression',
              value: 'vars.colors.blue',
            },
          },
        },
        {
          name: 'checkGreenAppearanceStyles',
          properties: {
            backgroundColor: {
              kind: 'expression',
              value: 'vars.colors.green',
            },
          },
        },
        {
          name: 'checkRedAppearanceStyles',
          properties: {
            backgroundColor: {
              kind: 'expression',
              value: 'vars.colors.red',
            },
          },
        },
      ],
      exports: [
        {
          name: 'checkAppearanceStyles',
          entries: {
            blue: {
              kind: 'expression',
              value: 'checkBlueAppearanceStyles',
            },
            green: {
              kind: 'expression',
              value: 'checkGreenAppearanceStyles',
            },
            red: {
              kind: 'expression',
              value: 'checkRedAppearanceStyles',
            },
          },
        },
      ],
    },
    {
      type: 'map',
      target: '../label/styles',
      imports: [
        {
          import: '{ style }',
          from: '@vanilla-extract/css',
        },
      ],
      styles: [
        {
          exported: true,
          name: 'labelAppearanceStyles',
          properties: {
            color: {
              kind: 'expression',
              value: "'black'",
            },
          },
        },
      ],
    },
    {
      type: 'map',
      target: '.',
      imports: [
        {
          kind: 'type',
          import: '{ CheckboxAppearance }',
          from: '../checkbox.interfaces.js',
        },
        {
          kind: 'type',
          import: '{ CheckboxAppearanceName }',
          from: '../checkbox.interfaces.js',
        },
        {
          import: '{ boxAppearanceStyles }',
          from: '../box/index.js',
        },
        {
          import: '{ checkAppearanceStyles }',
          from: '../check/index.js',
        },
        {
          import: '{ labelAppearanceStyles }',
          from: '../label/index.js',
        },
      ],
      exports: [
        {
          name: 'checkboxAppearances',
          typeName: 'CheckboxAppearance',
          variantsType: 'CheckboxAppearanceName',
          entries: {
            blue: {
              kind: 'expression',
              value:
                '{ box: boxAppearanceStyles.blue, check: checkAppearanceStyles.blue, label: labelAppearanceStyles }',
            },
            green: {
              kind: 'expression',
              value:
                '{ box: boxAppearanceStyles.green, check: checkAppearanceStyles.green, label: labelAppearanceStyles }',
            },
            red: {
              kind: 'expression',
              value:
                '{ box: boxAppearanceStyles.red, check: checkAppearanceStyles.red, label: labelAppearanceStyles }',
            },
          },
        },
      ],
    },
  ],
}

export default schema
