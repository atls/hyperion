import type { AvatarProps } from './avatar.interfaces.js'

import { Root }             from '@radix-ui/react-avatar'
import { clsx }             from 'clsx'
import { forwardRef }       from 'react'
import React                from 'react'

import { avatarStyles }     from './avatar.css.js'

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((
  { size, shape, className, children, ...props },
  ref
) => (
  <Root ref={ref} className={clsx(className, avatarStyles({ size, shape }))} {...props}>
    {children}
  </Root>
))
