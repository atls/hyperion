import type { ReactNode }   from 'react'

import type { AddonsProps } from './interfaces.js'

import { Children }         from 'react'
import { clsx }             from 'clsx'

import { addonStyles }      from '../styles/layout/addons.css.js'
import { addonsStyles }     from '../styles/layout/addons.css.js'
import { leadingStyles }    from '../styles/layout/addons.css.js'
import { trailingStyles }   from '../styles/layout/addons.css.js'

export const Addons = ({ children, position }: AddonsProps): ReactNode => {
  const addons = Children.toArray(children)

  if (addons.length === 0) {
    return null
  }

  return (
    <span className={clsx(addonsStyles, position === 'leading' ? leadingStyles : trailingStyles)}>
      {Children.map(addons, (addon) => (
        <span className={addonStyles}>{addon}</span>
      ))}
    </span>
  )
}
