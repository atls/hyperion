import { recipe }             from '@vanilla-extract/recipes'

import { appearanceVariant }  from './appearance.css.js'
import { appearanceHover }    from './appearance.css.js'
import { appearancePressed }  from './appearance.css.js'
import { appearanceDisabled } from './appearance.css.js'
import { baseStyles }         from './base.css.js'
import { shapeStyles }        from './shape.css.js'

export const buttonStyles = recipe({
  base: baseStyles,

  variants: {
    variant: appearanceVariant,
    hover: appearanceHover,
    pressed: appearancePressed,
    disabled: appearanceDisabled,
    size: shapeStyles,
  },

  defaultVariants: {
    variant: 'blue',
    size: 'medium',
  },
})
