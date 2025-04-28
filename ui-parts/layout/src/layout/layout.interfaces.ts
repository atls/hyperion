import type { SprinklesFn }     from 'rainbow-sprinkles'
import type { HTMLAttributes }  from 'react'
import type { Ref }             from 'react'

import type { LayoutSprinkles } from './layout.css.js'

export interface BaseLayoutProps extends HTMLAttributes<HTMLDivElement> {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
  ref?: Ref<HTMLDivElement>
}

export interface LayoutElementProps extends BaseLayoutProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprinkles: SprinklesFn<any>
}

export interface LayoutProps extends BaseLayoutProps, LayoutSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
