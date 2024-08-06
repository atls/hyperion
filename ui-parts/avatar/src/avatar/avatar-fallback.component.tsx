import { Root }         from '@radix-ui/react-avatar'

import React            from 'react'
import { clsx }         from 'clsx'
import { forwardRef }   from 'react'

import { AvatarProps }  from './avatar.interfaces.js'
import { avatarStyles } from './avatar.css.js'

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((
  { size, shape, className, children, ...props },
  ref
) => (
  <Root ref={ref} className={clsx(className, avatarStyles({ size, shape }))} {...props}>
    {children}
  </Root>
))
