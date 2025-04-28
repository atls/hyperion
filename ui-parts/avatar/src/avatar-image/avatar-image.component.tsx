import type { ReactNode }    from 'react'

import type { ImageProps }   from './avatar-image.interfaces.js'

import { Image }             from '@radix-ui/react-avatar'
import { clsx }              from 'clsx'
import React                 from 'react'

import { avatarImageStyles } from './avatar-image.css.js'

export const AvatarImage = ({ className, children, ref, ...props }: ImageProps): ReactNode => (
  <Image ref={ref} className={clsx(className, avatarImageStyles)} {...props}>
    {children}
  </Image>
)
