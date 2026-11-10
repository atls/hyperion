import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'

import type { BoxAppearance }  from './styles/appearance/interfaces.js'
import type { BoxShape }       from './styles/shape/interfaces.js'

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  appearance: BoxAppearance
  shape: BoxShape
  ref?: Ref<HTMLDivElement>
}
