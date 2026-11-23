import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { borderWidths }        from '@atls-ui/theme/tokens'
import { spacing }             from '@atls-ui/theme/tokens'

export const boxVariables = createThemeContract({
  background: null,
  border: null,
  shadow: null,
  hoverBackground: null,
  hoverBorder: null,
  hoverShadow: null,
})
export const boxAppearanceStyles = style({
  backgroundColor: boxVariables.background,
  borderColor: boxVariables.border,
  boxShadow: boxVariables.shadow,
  selectors: {
    '&:hover:not([aria-disabled=true])': {
      backgroundColor: boxVariables.hoverBackground,
      borderColor: boxVariables.hoverBorder,
      boxShadow: boxVariables.hoverShadow,
    },
    '&:focus-visible': {
      outline: `${borderWidths.md} solid ${boxVariables.border}`,
      outlineOffset: spacing.component.xs2,
    },
  },
})
