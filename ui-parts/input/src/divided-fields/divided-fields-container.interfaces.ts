import { HTMLAttributes }                  from 'react'

import { DividedFieldsContainerSprinkles } from './divided-fields-container.css.js'

export interface DividedFieldsContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    DividedFieldsContainerSprinkles {
  paddingRatio?: number
  size?: string
}
