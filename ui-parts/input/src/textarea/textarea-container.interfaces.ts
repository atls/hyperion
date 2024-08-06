import { HTMLAttributes }             from 'react'

import { TextareaContainerSprinkles } from './textarea-container.css.js'

export interface TextareaContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    TextareaContainerSprinkles {
  attach?: 'left' | 'right' | 'both' | null
  paddingRatio?: number
  rounding?: string
  size?: string
}
