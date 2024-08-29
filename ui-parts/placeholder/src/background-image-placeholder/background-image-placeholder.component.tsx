import type { FC }                              from 'react'

import type { BackgroundImagePlaceholderProps } from './background-image-placeholder.interfaces.js'

import { clsx }                                 from 'clsx'
import React                                    from 'react'

import { backgroundImagePlaceholderStyles }     from './background-image-placeholder.css.js'

export const BackgroundImagePlaceholder: FC<BackgroundImagePlaceholderProps> = ({
  className,
  ...props
}) => <div className={clsx(backgroundImagePlaceholderStyles, className)} {...props} />
