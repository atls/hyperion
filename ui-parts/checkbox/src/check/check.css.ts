import { style } from '@vanilla-extract/css'

export const checkBaseStyles = style({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
})

export const checkCheckedStyles = style({
  display: 'flex',
})

const checkBlueAppearanceStyles = style({
  backgroundColor: 'blue',
})

const checkGreenAppearanceStyles = style({
  backgroundColor: 'green',
})

const checkRedAppearanceStyles = style({
  backgroundColor: 'red',
})

export const checkAppearanceStyles = {
  blue: checkBlueAppearanceStyles,
  green: checkGreenAppearanceStyles,
  red: checkRedAppearanceStyles,
}

export const checkShapeStyles = style({
  width: 'calc(100% - 3px)',
  height: 'calc(100% - 3px)',
  borderRadius: 4,
})
