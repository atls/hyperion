import { defineProperties } from 'rainbow-sprinkles'

import { vars }             from '../theme.css.js'

export const typographyProperties = defineProperties({
  dynamicProperties: {
    textAlign: true,
    fontStyle: true,
  },
  staticProperties: {
    fontSize: vars.fontSizes,
    fontFamily: vars.fonts,
    fontWeight: vars.fontWeights,
    lineHeight: vars.lineHeights,
  },
})
