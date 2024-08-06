import { HTMLAttributes } from 'react'

import { AddonSprinkles } from './addon.css.js'

export interface AddonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, AddonSprinkles {
  position: 'before' | 'after'
  attach?: 'left' | 'right' | 'both' | null
  paddingRatio?: number
  rounding?: string
  size?: string
}
