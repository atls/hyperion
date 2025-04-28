import type { ReactNode }   from 'react'

import type { AvatarProps } from './avatar.interfaces.js'

import { Root }             from '@radix-ui/react-avatar'
import { clsx }             from 'clsx'
import React                from 'react'

import { avatarStyles }     from './avatar.css.js'

export const Avatar = ({
  size,
  shape,
  className,
  children,
  ref,
  ...props
}: AvatarProps): ReactNode => (
  <Root ref={ref} className={clsx(className, avatarStyles({ size, shape }))} {...props}>
    {children}
  </Root>
)
