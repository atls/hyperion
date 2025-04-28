import type { LinkProps as BaseLinkProps } from 'next/link.js'
import type { AnchorHTMLAttributes }       from 'react'
import type { Ref }                        from 'react'

import type { LinkSprinkles }              from './link.css.js'

export interface LinkProps
  extends LinkSprinkles,
    BaseLinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseLinkProps | 'color'> {
  ref?: Ref<HTMLAnchorElement>
}
