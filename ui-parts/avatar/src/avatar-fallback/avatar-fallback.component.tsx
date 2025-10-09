import type { ReactNode }       from 'react'

import type { FallbackProps }   from './avatar-fallback.interfaces.js'

import { Fallback }             from '@radix-ui/react-avatar'
import { clsx }                 from 'clsx'

import { avatarFallbackStyles } from './avatar-fallback.css.js'

export const AvatarFallback = ({
  size,
  className,
  children,
  ref,
  ...props
}: FallbackProps): ReactNode => (
  <Fallback ref={ref} className={clsx(className, avatarFallbackStyles({ size }))} {...props}>
    {children}
  </Fallback>
)
