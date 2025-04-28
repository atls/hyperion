import type { HTMLAttributes }         from 'react'
import type { Ref }                    from 'react'

import type { ProgressLinecap }        from '../progress.interfaces.js'
import type { LineContainerSprinkles } from './line-container.css.js'

export interface LineContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    LineContainerSprinkles {
  trailLinecap?: ProgressLinecap
  ref?: Ref<HTMLDivElement>
}
