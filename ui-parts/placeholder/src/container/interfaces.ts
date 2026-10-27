import type { HTMLAttributes }          from 'react'
import type { Ref }                     from 'react'

import type { PlaceholderTextPosition } from '../placeholder.interfaces.js'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  hasDescription: boolean
  hasTitle: boolean
  horizontalMinHeight: string
  ref?: Ref<HTMLDivElement>
  textPosition: PlaceholderTextPosition
}
