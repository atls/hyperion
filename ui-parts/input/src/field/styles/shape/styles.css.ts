import { createVar }   from '@vanilla-extract/css'
import { fallbackVar } from '@vanilla-extract/css'
import { style }       from '@vanilla-extract/css'
export const fieldWidth = createVar()
export const unfilledFieldWidth = createVar()
export const fieldShapeStyles = style({
  width: fallbackVar(fieldWidth, 'auto'),
  selectors: {
    '&:has(:is(input, textarea):placeholder-shown):not([data-filled="true"])': {
      width: fallbackVar(unfilledFieldWidth, fieldWidth, 'auto'),
    },
  },
})
