import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'

import type { SpaceSprinkles } from './space.css.js'

export interface SpaceProps extends SpaceSprinkles, HTMLAttributes<HTMLSpanElement> {
  count?: number
  ref?: Ref<HTMLSpanElement>
}
