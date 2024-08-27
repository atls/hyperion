import { FC }                               from 'react'
import { clsx }                             from 'clsx'
import React                                from 'react'

import { BackgroundImagePlaceholderProps }  from './background-image-placeholder.interfaces.js'
import { backgroundImagePlaceholderStyles } from './background-image-placeholder.css.js'

export const BackgroundImagePlaceholder: FC<BackgroundImagePlaceholderProps> = ({
  className,
  ...props
}) => <div className={clsx(backgroundImagePlaceholderStyles, className)} {...props} />
