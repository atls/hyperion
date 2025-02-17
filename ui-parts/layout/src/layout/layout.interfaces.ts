import type { SprinklesFn }     from 'rainbow-sprinkles/createRuntimeFn'
import type { HTMLAttributes }  from 'react'

import type { LayoutSprinkles } from './layout.css.js'

export interface BaseLayoutProps extends HTMLAttributes<HTMLDivElement> {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
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
