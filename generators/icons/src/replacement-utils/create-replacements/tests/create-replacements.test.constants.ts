import type { TestCase } from './create-replacements.test.interfaces.js'

export const testCases: Array<TestCase> = [
  {
    replacementIcons: {},
    expectedResult: {},
  },
  {
    replacementIcons: {
      CircleIcon: '#18181B',
      LeftIcon: '#18181B',
    },
    expectedResult: {
      CircleIcon: {
        '#18181B': '{(color && vars.colors[color]) || color || "#18181B"}',
      },
      LeftIcon: {
        '#18181B': '{(color && vars.colors[color]) || color || "#18181B"}',
      },
    },
  },
  {
    replacementIcons: {
      CircleIcon: ['#18181B', '#000000'],
      LeftIcon: ['#18181B', '#000000', '#0000FF'],
    },
    expectedResult: {
      CircleIcon: {
        '#18181B': '{(color && vars.colors[color]) || color || "#18181B"}',
        '#000000': '{(color && vars.colors[color]) || color || "#000000"}',
      },
      LeftIcon: {
        '#18181B': '{(color && vars.colors[color]) || color || "#18181B"}',
        '#000000': '{(color && vars.colors[color]) || color || "#000000"}',
        '#0000FF': '{(color && vars.colors[color]) || color || "#0000FF"}',
      },
    },
  },
]
