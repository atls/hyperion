import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { boxBaseStyles }       from '../../../box/styles/base.css.js'
export const labelVariables = createThemeContract({ color: null, hoverColor: null })
export const labelAppearanceStyles = style({
  color: labelVariables.color,
  selectors: {
    [`${boxBaseStyles}:hover:not([aria-disabled=true]) &`]: { color: labelVariables.hoverColor },
  },
})
