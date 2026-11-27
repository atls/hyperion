import type { ReactNode }            from 'react'

import type { OptionProps }          from './interfaces.js'

import { assignInlineVars }          from '@vanilla-extract/dynamic'
import { clsx }                      from 'clsx'

import { useTheme }                  from '@atls-ui-parts/theme'
import { borderWidths }              from '@atls-ui/theme'

import { optionAppearanceStyles }    from './styles/appearance/styles.css.js'
import { optionAppearanceVariables } from './styles/appearance/styles.css.js'
import { optionAppearances }         from './styles/appearance/variants.js'
import { optionBaseStyles }          from './styles/base.css.js'
import { optionBorderWidth }         from './styles/shape/variables.css.js'
import { optionBorderRadius }        from './styles/shape/variables.css.js'
import { optionShapes }              from './styles/shape/variants.js'

export const Option = ({
  shape = optionShapes.md,
  appearance = 'default',
  focused = false,
  selected,
  className,
  style,
  ...props
}: OptionProps): ReactNode => {
  const theme = useTheme()
  const resolvedAppearance =
    typeof appearance === 'string' ? optionAppearances[appearance](theme) : appearance
  const { typography, borderWidth, borderRadius, ...geometry } = shape
  const radius = borderRadius === 'inherit' ? undefined : borderRadius
  return (
    <li
      role='option'
      {...props}
      aria-selected={selected ?? props['aria-selected'] ?? false}
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
        ...assignInlineVars(optionAppearanceVariables, resolvedAppearance),
        ...style,
      }}
    />
  )
}
