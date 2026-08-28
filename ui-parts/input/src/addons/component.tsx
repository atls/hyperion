import type { ReactNode }  from 'react'

import type { AddonProps } from './interfaces.js'

import { addonStyles }     from '../styles/layout/addons.css.js'
import { leadingStyles }   from '../styles/layout/addons.css.js'
import { trailingStyles }  from '../styles/layout/addons.css.js'

export const Addon = ({ children, position }: AddonProps): ReactNode => {
  if (children === undefined || children === null || children === false) {
    return null
  }

  return (
    <div className={position === 'leading' ? leadingStyles : trailingStyles}>
      <div className={addonStyles}>{children}</div>
    </div>
  )
}
