import type { HTMLAttributes }      from 'react'
import type { Ref }                 from 'react'

import type { NavigationSprinkles } from './navigation.css.js'

export type NavigationAttachType = 'next' | 'prev'

export interface NavigationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    NavigationSprinkles {
  attach: NavigationAttachType
  show?: boolean
  fill?: boolean
  offset?: number | string
  ref?: Ref<HTMLDivElement>
}

export interface CreateFillStylesResult {
  top: number | string
  height: string
  marginTop?: number
}

export interface CreateAttachStylesResult {
  right?: number | string
  left?: number | string
}
