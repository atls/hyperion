import type { ReactNode }      from 'react'

import type { AddonsProps }    from './interfaces.js'

import { Children }            from 'react'
import { clsx }                from 'clsx'

import { addonStyles }         from '../styles/layout/addons.css.js'
import { addonsStyles }        from '../styles/layout/addons.css.js'
import { leadingAddonStyles }  from '../styles/layout/addons.css.js'
import { trailingAddonStyles } from '../styles/layout/addons.css.js'

export const Addons = ({ children, position, reserveSpace }: AddonsProps): ReactNode => {
  const addons = Children.toArray(children)

  if (!reserveSpace && addons.length === 0) {
    return null
  }

  return (
    <span
      aria-hidden={addons.length > 0 ? undefined : true}
      className={clsx(
        addonsStyles,
        position === 'leading' ? leadingAddonStyles : trailingAddonStyles
      )}
    >
      {Children.map(addons, (addon) => (
        <span className={addonStyles}>{addon}</span>
      ))}
    </span>
  )
}
