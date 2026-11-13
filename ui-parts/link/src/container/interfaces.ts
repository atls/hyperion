import type { LinkProps as NextLinkProps } from 'next/link.js'
import type { AnchorHTMLAttributes }       from 'react'
import type { Ref }                        from 'react'

import type { ContainerShape }             from './styles/shape/interfaces.js'
export interface ContainerProps
  extends
    Omit<NextLinkProps, 'legacyBehavior' | 'passHref'>,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps | 'color'> {
  ref?: Ref<HTMLAnchorElement>
  disabled?: boolean
  shape: ContainerShape
}
