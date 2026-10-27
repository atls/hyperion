import type { ReactNode }              from 'react'

import type { DescriptionProps }       from './interfaces.js'

import { clsx }                        from 'clsx'

import { descriptionAppearanceStyles } from './appearance.css.js'
import { descriptionBaseStyles }       from './base.css.js'

export const Description = ({
  children,
  className,
  shape,
  ...props
}: DescriptionProps): ReactNode => (
  <span
    {...props}
    className={clsx(descriptionBaseStyles, descriptionAppearanceStyles, shape, className)}
  >
    {children}
  </span>
)
