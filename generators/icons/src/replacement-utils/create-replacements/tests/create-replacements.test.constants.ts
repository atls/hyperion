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
        '#18181B': 'currentColor',
      },
      LeftIcon: {
        '#18181B': 'currentColor',
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
        '#18181B': 'currentColor',
        '#000000': 'currentColor',
      },
      LeftIcon: {
        '#18181B': 'currentColor',
        '#000000': 'currentColor',
        '#0000FF': 'currentColor',
      },
    },
  },
]
