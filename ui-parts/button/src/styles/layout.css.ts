import { createVar }      from '@vanilla-extract/css'
import { style }          from '@vanilla-extract/css'

import { shapeVariables } from './shape.css.js'

export const layoutVariables = {
  sideGap: createVar(),
  sideWidth: createVar(),
} as const

export const fullWidthStyles = style({
  width: '100%',
})

export const contentStyles = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: shapeVariables.gap,
  minWidth: 0,
})

export const fullWidthContentStyles = style({
  display: 'grid',
  gridTemplateColumns: `${layoutVariables.sideWidth} minmax(0, 1fr) ${layoutVariables.sideWidth}`,
  columnGap: layoutVariables.sideGap,
  width: '100%',
})

export const addonsStyles = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: shapeVariables.gap,
  color: 'inherit',
})

export const addonStyles = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: shapeVariables.addonSize,
  height: shapeVariables.addonSize,
  flex: '0 0 auto',
  color: 'inherit',
  selectors: {
    '& > svg': {
      width: '100%',
      height: '100%',
    },
  },
})

export const leadingAddonStyles = style({
  justifySelf: 'start',
})

export const trailingAddonStyles = style({
  justifySelf: 'end',
})

export const labelStyles = style({
  minWidth: 0,
  color: 'inherit',
})
