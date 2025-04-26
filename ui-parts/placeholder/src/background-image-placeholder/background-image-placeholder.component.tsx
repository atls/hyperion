import type { ReactNode }                       from 'react'

import type { BackgroundImagePlaceholderProps } from './background-image-placeholder.interfaces.js'

import { clsx }                                 from 'clsx'
import React                                    from 'react'

import { backgroundImagePlaceholderStyles }     from './background-image-placeholder.css.js'

export const BackgroundImagePlaceholder = ({
  className,
  ...props
}: BackgroundImagePlaceholderProps): ReactNode => (
  <div className={clsx(backgroundImagePlaceholderStyles, className)} {...props} />
)
