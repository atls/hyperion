import type { CSSProperties }  from 'react'
import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'

import type { ContainerShape } from './styles/shape/interfaces.js'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>
  floatingStyles: CSSProperties
  shape: ContainerShape
}
