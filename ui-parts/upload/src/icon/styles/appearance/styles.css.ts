import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { boxBaseStyles }       from '../../../box/styles/base.css.js'
export const iconVariables = createThemeContract({ color: null, hoverColor: null })
export const iconAppearanceStyles = style({
  color: iconVariables.color,
  selectors: {
    [`${boxBaseStyles}:hover:not([aria-disabled=true]) &`]: { color: iconVariables.hoverColor },
  },
})
