import { HTMLAttributes }         from 'react'

import { ProgressLinecap }        from '../progress.interfaces.js'
import { LineContainerSprinkles } from './line-container.css.js'

export interface LineContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    LineContainerSprinkles {
  trailLinecap?: ProgressLinecap
}
