import { HTMLAttributes }      from 'react'

import { NavigationSprinkles } from './navigation.css.js'

export type NavigationAttachType = 'prev' | 'next'

export interface NavigationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    NavigationSprinkles {
  attach: NavigationAttachType
  show?: boolean
  fill?: boolean
  offset?: number | string
}
