import { createVar }    from '@vanilla-extract/css'
import { fallbackVar }  from '@vanilla-extract/css'
import { style }        from '@vanilla-extract/css'

import { borderWidths } from '@atls-ui/theme'

export const fieldWidth = createVar()
export const unfilledFieldWidth = createVar()
export const fieldBorderWidth = createVar()
export const fieldShapeStyles = style({
  width: fallbackVar(fieldWidth, 'auto'),
  borderWidth: fieldBorderWidth,
  selectors: {
    '&:has(:is(input, textarea):placeholder-shown):not([data-filled="true"])': {
      width: fallbackVar(unfilledFieldWidth, fieldWidth, 'auto'),
    },
    '&:focus-within:not([data-disabled="true"]):not([data-error="true"])': {
      borderWidth: borderWidths.md,
      outlineWidth: borderWidths.none,
    },
    '&[data-error="true"]:focus-within:not([data-disabled="true"])': {
      borderWidth: borderWidths.md,
      outlineWidth: borderWidths.none,
    },
  },
})
