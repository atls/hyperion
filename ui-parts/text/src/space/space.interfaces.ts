import { HTMLAttributes } from 'react'

import { SpaceSprinkles } from './space.css.js'

export interface SpaceProps extends SpaceSprinkles, HTMLAttributes<HTMLSpanElement> {
  count?: number
}
