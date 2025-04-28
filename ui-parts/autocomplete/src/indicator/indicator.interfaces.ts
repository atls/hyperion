import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'

export interface IndicatorProps extends HTMLAttributes<HTMLButtonElement> {
  ref?: Ref<HTMLButtonElement>
}
