import { AnchorHTMLAttributes } from 'react'

import { LinkSprinkles }        from './link.css.js'

export interface LinkProps
  extends LinkSprinkles,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  path: string
}
