import type { ReactNode } from 'react'

import type { MenuProps } from './interfaces.js'

import { clsx }           from 'clsx'

import { menuBaseStyles } from './styles/base.css.js'
export const Menu = ({ shape, appearance, className, style, ...props }: MenuProps): ReactNode => (
  <ul
    {...props}
    className={clsx(menuBaseStyles, className)}
    style={{
      ...shape,
      backgroundColor: appearance.backgroundColor,
      boxShadow: appearance.shadow,
      ...style,
    }}
  />
)
