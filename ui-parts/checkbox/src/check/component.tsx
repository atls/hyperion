import type { ReactNode }           from 'react'

import type { CheckProps }          from './interfaces.js'

import { assignInlineVars }         from '@vanilla-extract/dynamic'
import { clsx }                     from 'clsx'

import { CheckIcon }                from '@atls-ui-parts/icons'
import { MinusIcon }                from '@atls-ui-parts/icons'

import { checkAppearanceStyles }    from './appearance/styles.css.js'
import { checkAppearanceVariables } from './appearance/styles.css.js'
import { checkBaseStyles }          from './base.css.js'
import { checkVisibleStyles }       from './base.css.js'

export const Check = ({
  appearance,
  checked,
  checkedIcon,
  className,
  indeterminate,
  indeterminateIcon,
  shape,
}: CheckProps): ReactNode => {
  let icon = checkedIcon ?? <CheckIcon />

  if (indeterminate) {
    icon = indeterminateIcon ?? <MinusIcon />
  }

  return (
    <div
      style={assignInlineVars(checkAppearanceVariables, appearance)}
      className={clsx(
        checkBaseStyles,
        checkAppearanceStyles,
        shape,
        (checked || indeterminate) && checkVisibleStyles,
        className
      )}
    >
      {icon}
    </div>
  )
}
