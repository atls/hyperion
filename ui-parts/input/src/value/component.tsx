import type { ReactNode }                from 'react'

import type { InputValueProps }          from './interfaces.js'

import { assignInlineVars }              from '@vanilla-extract/dynamic'
import { clsx }                          from 'clsx'

import { inputValueAppearanceStyles }    from './styles/appearance/styles.css.js'
import { inputValueAppearanceVariables } from './styles/appearance/styles.css.js'
import { inputValueBaseStyles }          from './styles/base.css.js'
export const InputValue = ({
  shape,
  appearance,
  placeholder,
  className,
  ...props
}: InputValueProps): ReactNode => (
  <span
    {...props}
    className={clsx(inputValueBaseStyles, inputValueAppearanceStyles, className)}
    data-placeholder={placeholder}
    style={{ ...shape.typography, ...assignInlineVars(inputValueAppearanceVariables, appearance) }}
  />
)
