import { HTMLAttributes }       from 'react'

import { ProgressLinecap }      from '../progress.interfaces.js'
import { LinePercentSprinkles } from './line-percent.css.js'

export interface LinePercentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    LinePercentSprinkles {
  strokeLinecap?: ProgressLinecap
}
