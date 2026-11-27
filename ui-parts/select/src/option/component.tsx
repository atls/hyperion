import type { ReactNode }            from 'react'

import type { OptionProps }          from './interfaces.js'

import { assignInlineVars }          from '@vanilla-extract/dynamic'
import { clsx }                      from 'clsx'

import { borderWidths }              from '@atls-ui/theme'

import { optionAppearanceStyles }    from './styles/appearance/styles.css.js'
import { optionAppearanceVariables } from './styles/appearance/styles.css.js'
import { optionBaseStyles }          from './styles/base.css.js'
import { optionBorderWidth }         from './styles/shape/variables.css.js'
import { optionBorderRadius }        from './styles/shape/variables.css.js'

export const Option = ({
  shape,
  appearance,
  focused = false,
  className,
  style,
  ...props
}: OptionProps): ReactNode => {
  const { typography, borderWidth, borderRadius, ...geometry } = shape
  const radius = borderRadius === 'inherit' ? undefined : borderRadius
  return (
    <li
      {...props}
      className={clsx(optionBaseStyles, optionAppearanceStyles, className)}
      data-focused={focused}
      style={{
        ...typography,
        ...geometry,
        ...assignInlineVars({
          [optionBorderWidth]:
            typeof borderWidth === 'number'
              ? `${borderWidth}px`
              : (borderWidth ?? borderWidths.none),
          [optionBorderRadius]: typeof radius === 'number' ? `${radius}px` : radius,
        }),
        ...assignInlineVars(optionAppearanceVariables, appearance),
        ...style,
      }}
    />
  )
}
