import { defineProperties } from 'rainbow-sprinkles'

import { vars }             from '../theme.css.js'

export const borderProperties = defineProperties({
  dynamicProperties: {
    borderWidth: true,
    borderTopWidth: true,
    borderRightWidth: true,
    borderBottomWidth: true,
    borderLeftWidth: true,

    borderStyle: true,
    borderTopStyle: true,
    borderRightStyle: true,
    borderBottomStyle: true,
    borderLeftStyle: true,
  },
  staticProperties: {
    borderColor: vars.colors,
    borderTopColor: vars.colors,
    borderRightColor: vars.colors,
    borderBottomColor: vars.colors,
    borderLeftColor: vars.colors,

    borderRadius: vars.radii,
    borderTopLeftRadius: vars.radii,
    borderTopRightRadius: vars.radii,
    borderBottomLeftRadius: vars.radii,
    borderBottomRightRadius: vars.radii,

    border: vars.borders,
    borderTop: vars.borders,
    borderRight: vars.borders,
    borderBottom: vars.borders,
    borderLeft: vars.borders,
  },
  shorthands: {
    borderX: ['borderLeft', 'borderRight'],
    borderY: ['borderTop', 'borderBottom'],
  },
})
