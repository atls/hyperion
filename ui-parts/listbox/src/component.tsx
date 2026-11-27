import type { ReactNode }     from 'react'

import type { ListboxProps }  from './interfaces.js'

import { clsx }               from 'clsx'

import { useTheme }           from '@atls-ui-parts/theme'

import { listboxAppearances } from './styles/appearance/variants.js'
import { listboxBaseStyles }  from './styles/base.css.js'
import { listboxShapes }      from './styles/shape/variants.js'

export const Listbox = ({
  shape = listboxShapes.md,
  appearance = 'default',
  className,
  style,
  ...props
}: ListboxProps): ReactNode => {
  const theme = useTheme()
  const resolvedAppearance =
    typeof appearance === 'string' ? listboxAppearances[appearance](theme) : appearance
  return (
    <ul
      role='listbox'
      {...props}
      className={clsx(listboxBaseStyles, className)}
      style={{
        ...shape,
        backgroundColor: resolvedAppearance.backgroundColor,
        boxShadow: resolvedAppearance.shadow,
        ...style,
      }}
    />
  )
}
