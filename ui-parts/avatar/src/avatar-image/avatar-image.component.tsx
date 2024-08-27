import { Image }             from '@radix-ui/react-avatar'
import { clsx }              from 'clsx'
import { forwardRef }        from 'react'
import React                 from 'react'

import { ImageProps }        from './avatar-image.interfaces.js'
import { avatarImageStyles } from './avatar-image.css.js'

export const AvatarImage = forwardRef<HTMLImageElement, ImageProps>((
  { className, children, ...props },
  ref
) => (
  <Image ref={ref} className={clsx(className, avatarImageStyles)} {...props}>
    {children}
  </Image>
))
