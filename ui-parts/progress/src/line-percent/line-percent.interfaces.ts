import type { HTMLAttributes }       from 'react'

import type { ProgressLinecap }      from '../progress.interfaces.js'
import type { LinePercentSprinkles } from './line-percent.css.js'

export interface LinePercentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    LinePercentSprinkles {
  strokeLinecap?: ProgressLinecap
}
