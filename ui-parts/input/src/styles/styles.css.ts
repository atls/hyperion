import { recipe }             from '@vanilla-extract/recipes'

import { appearanceActive }   from './appearance.css.js'
import { appearanceDisabled } from './appearance.css.js'
import { appearanceFocus }    from './appearance.css.js'
import { appearanceHover }    from './appearance.css.js'
import { appearanceVariant }  from './appearance.css.js'
import { baseStyles }         from './base.css.js'
import { shapeStyles }        from './shape.css.js'

export const inputStyles = recipe({
  base: baseStyles,

  variants: {
    variant: appearanceVariant,
    hover: appearanceHover,
    focus: appearanceFocus,
    active: appearanceActive,
    disabled: appearanceDisabled,
    size: shapeStyles,
  },

  defaultVariants: {
    variant: 'white',
    size: 'normal',
  },
})
