'use client'

import type { ReactNode }              from 'react'

import type { PaginationProps }        from './interfaces.js'

import { clsx }                        from 'clsx'

import { useTheme }                    from '@atls-ui-parts/theme'

import { DEFAULT_LABEL }               from './constants.js'
import { FIRST_PAGE }                  from './constants.js'
import { Container }                   from './container/component.js'
import { Item }                        from './item/component.js'
import { getDefaultItemLabel }         from './constants.js'
import { resolvePaginationAppearance } from './styles/appearance/resolve.js'
import { paginationShapes }            from './styles/shape/variants.js'
import { usePagination }               from './usePagination.js'

export const Pagination = ({
  count,
  value,
  defaultValue,
  onChange,
  disabled,
  shape = paginationShapes.default,
  appearance = 'default',
  animation = false,
  getItemLabel = getDefaultItemLabel,
  getItemProps,
  classNames,
  className,
  'aria-label': ariaLabel = DEFAULT_LABEL,
  ...props
}: PaginationProps): ReactNode => {
  const theme = useTheme()
  const resolvedAppearance = resolvePaginationAppearance(appearance, theme)
  const { current, transition, select } = usePagination({ count, value, defaultValue, onChange })

  return (
    <Container
      {...props}
      aria-label={ariaLabel}
      className={clsx(classNames?.container, className)}
      shape={shape.container}
    >
      {Array.from({ length: count }, (_, index) => {
        const page = index + FIRST_PAGE
        const itemProps = getItemProps?.(page)
        return (
          <Item
            {...itemProps}
            key={page}
            aria-label={itemProps?.['aria-label'] ?? getItemLabel(page)}
            disabled={disabled || itemProps?.disabled}
            selected={current === page}
            page={page}
            shape={shape.item}
            appearance={resolvedAppearance.item}
            transition={transition}
            className={clsx(classNames?.item, itemProps?.className)}
            indicatorClassName={classNames?.indicator}
            indicatorAppearance={resolvedAppearance.indicator}
            animation={
              transition.from >= FIRST_PAGE && transition.from <= count ? animation : false
            }
            onClick={(event) => {
              itemProps?.onClick?.(event)
              if (!event.defaultPrevented) select(page)
            }}
          />
        )
      })}
    </Container>
  )
}
