import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'

import type { AddonSprinkles } from './addon.css.js'

export interface AddonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, AddonSprinkles {
  position: 'after' | 'before'
  attach?: 'both' | 'left' | 'right' | null
  paddingRatio?: number
  rounding?: string
  size?: string
  ref?: Ref<HTMLDivElement>
}
