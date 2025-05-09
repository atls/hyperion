import type { SprinklesFn }          from 'rainbow-sprinkles'
import type { HTMLAttributes }       from 'react'
import type { Ref }                  from 'react'

import type { HTMLElementSprinkles } from './html-element.css.js'

export interface BaseHTMLElementProps extends HTMLAttributes<HTMLElement> {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
  ref?: Ref<HTMLElement>
}

export interface HTMLElementElementProps extends BaseHTMLElementProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprinkles: SprinklesFn<any>
}

export interface HTMLElementProps extends BaseHTMLElementProps, HTMLElementSprinkles {}
