import type { ButtonProps }  from '../button.interfaces.js'

import { clsx }              from 'clsx'
import { forwardRef }        from 'react'
import React                 from 'react'

import { baseStyles }        from '../styles/base.css.js'
import { nulledGhostStyles } from './ghost-button.css.js'
import { shapeGhostStyles }  from './ghost-button.css.js'

export const GhostButton = forwardRef<HTMLButtonElement, ButtonProps>((
  { children, className, ...props },
  ref
) => (
  <button
    ref={ref}
    type='button'
    className={clsx(className, baseStyles, nulledGhostStyles, shapeGhostStyles)}
    {...props}
  >
    {children}
  </button>
))
