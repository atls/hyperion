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
        '#18181B': '{(props.color && vars.colors[props.color]) || props.color || "#18181B"}',
      },
      LeftIcon: {
        '#18181B': '{(props.color && vars.colors[props.color]) || props.color || "#18181B"}',
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
        '#18181B': '{(props.color && vars.colors[props.color]) || props.color || "#18181B"}',
        '#000000': '{(props.color && vars.colors[props.color]) || props.color || "#000000"}',
      },
      LeftIcon: {
        '#18181B': '{(props.color && vars.colors[props.color]) || props.color || "#18181B"}',
        '#000000': '{(props.color && vars.colors[props.color]) || props.color || "#000000"}',
        '#0000FF': '{(props.color && vars.colors[props.color]) || props.color || "#0000FF"}',
      },
    },
  },
]
