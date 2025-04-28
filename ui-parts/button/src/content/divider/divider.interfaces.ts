import type { HTMLAttributes }   from 'react'
import type { Ref }              from 'react'

import type { DividerSprinkles } from './divider.css.js'

export interface DividerProps extends HTMLAttributes<HTMLSpanElement>, DividerSprinkles {
  ref?: Ref<HTMLSpanElement>
}
