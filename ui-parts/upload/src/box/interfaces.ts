import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'

import type { BoxAppearance }  from './styles/appearance/interfaces.js'
import type { BoxShape }       from './styles/shape/interfaces.js'
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>
  shape: BoxShape
  appearance: BoxAppearance
  hoverAppearance: BoxAppearance
}
