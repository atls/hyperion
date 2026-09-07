import { style }               from '@vanilla-extract/css'

import { borderStyles }        from '@atls-ui/theme/tokens'
import { radii }               from '@atls-ui/theme/tokens'

import { switchThumbWidth }    from './shape/constants.js'
import { thumbOffsetVariable } from './shape/variants.css.js'
import { thumbSizeVariable }   from './shape/variants.css.js'

const switchTransitionDuration = '300ms'

export const baseStyles = style({
  appearance: 'none',
  position: 'relative',
  display: 'inline-flex',
  boxSizing: 'border-box',
  margin: 0,
  verticalAlign: 'middle',
  borderStyle: borderStyles.solid,
  outline: 'none',
  cursor: 'pointer',
  transitionDuration: switchTransitionDuration,
  transitionProperty: 'background-color, border-color, box-shadow',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDuration: '0.01ms',
    },
  },
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
})

export const thumbStyles = style({
  boxSizing: 'border-box',
  flexShrink: 0,
  width: switchThumbWidth,
  height: thumbSizeVariable,
  marginInlineEnd: 'auto',
  borderRadius: radii.full,
  background: 'currentColor',
  transform: 'translateX(-0.5px) rotate(0deg)',
  transformOrigin: 'center',
  pointerEvents: 'none',
  transitionDuration: switchTransitionDuration,
  transitionProperty: 'color, transform',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDuration: '0.01ms',
    },
  },
})

export const checkedThumbStyles = style({
  transform: `translateX(calc(${thumbOffsetVariable} - 0.5px)) rotate(180deg)`,
})
