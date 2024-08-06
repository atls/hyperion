import { defineProperties } from 'rainbow-sprinkles'

import { vars }             from '../theme.css.js'

export const colorProperties = defineProperties({
  dynamicProperties: {
    backgroundImage: true,
  },
  staticProperties: {
    color: vars.colors,
    background: vars.colors,
    backgroundColor: vars.colors,
  },
})
