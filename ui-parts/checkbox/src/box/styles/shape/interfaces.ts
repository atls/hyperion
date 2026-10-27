import type { CSSProperties } from 'react'

export interface BoxShape {
  className: string
  elevationSize: 'md' | 'sm' | 'xs'
  padding?: CSSProperties['padding']
}
