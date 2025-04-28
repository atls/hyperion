import type { HTMLAttributes }             from 'react'
import type { Ref }                        from 'react'

import type { TextareaContainerSprinkles } from './textarea-container.css.js'

export interface TextareaContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    TextareaContainerSprinkles {
  attach?: 'both' | 'left' | 'right' | null
  paddingRatio?: number
  rounding?: string
  size?: string
  ref?: Ref<HTMLDivElement>
}
