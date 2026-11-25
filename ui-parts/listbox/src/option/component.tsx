import type { ReactNode }            from 'react'

import type { OptionProps }          from './interfaces.js'

import { assignInlineVars }          from '@vanilla-extract/dynamic'
import { clsx }                      from 'clsx'

import { optionAppearanceStyles }    from './styles/appearance/styles.css.js'
import { optionAppearanceVariables } from './styles/appearance/styles.css.js'
import { optionBaseStyles }          from './styles/base.css.js'
export const Option = ({
  shape,
  appearance,
  highlighted,
  selected,
  className,
  style,
  ...props
}: OptionProps): ReactNode => {
  const { typography, ...geometry } = shape
  return (
    <li
      {...props}
      className={clsx(optionBaseStyles, optionAppearanceStyles, className)}
      data-highlighted={highlighted}
      data-selected={selected ?? props['aria-selected']}
      style={{
        ...typography,
        ...geometry,
        ...assignInlineVars(optionAppearanceVariables, appearance),
        ...style,
      }}
    />
  )
}
