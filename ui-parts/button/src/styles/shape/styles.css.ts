import { createVar } from '@vanilla-extract/css'
import { style }     from '@vanilla-extract/css'

export const shapeVariables = {
  addonSize: createVar(),
  borderRadius: createVar(),
  borderStyle: createVar(),
  borderWidth: createVar(),
  elevations: {
    default: createVar(),
    hover: createVar(),
    pressed: createVar(),
    disabled: createVar(),
    focused: createVar(),
  },
  gap: createVar(),
  paddingBlock: createVar(),
  paddingInline: createVar(),
  typography: {
    fontFamily: createVar(),
    fontSize: createVar(),
    fontWeight: createVar(),
    letterSpacing: createVar(),
    lineHeight: createVar(),
  },
} as const

export const shapeStyles = style({
  paddingBlock: shapeVariables.paddingBlock,
  paddingInline: shapeVariables.paddingInline,
  borderRadius: shapeVariables.borderRadius,
  filter: shapeVariables.elevations.default,
  fontFamily: shapeVariables.typography.fontFamily,
  fontSize: shapeVariables.typography.fontSize,
  fontWeight: shapeVariables.typography.fontWeight,
  letterSpacing: shapeVariables.typography.letterSpacing,
  lineHeight: shapeVariables.typography.lineHeight,
  outlineStyle: shapeVariables.borderStyle,
  outlineWidth: shapeVariables.borderWidth,
  selectors: {
    '&:hover:not(:disabled)': {
      filter: shapeVariables.elevations.hover,
    },
    '&:focus-visible:not(:disabled)': {
      filter: shapeVariables.elevations.focused,
    },
    '&:active:not(:disabled)': {
      filter: shapeVariables.elevations.pressed,
    },
    '&:disabled': {
      filter: shapeVariables.elevations.disabled,
    },
  },
})
