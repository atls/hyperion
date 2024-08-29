import type { AnchorHTMLAttributes } from 'react'

import type { LinkSprinkles }        from './link.css.js'

export interface LinkProps
  extends LinkSprinkles,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  path: string
}
