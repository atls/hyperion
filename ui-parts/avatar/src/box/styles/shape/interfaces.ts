import type { CSSProperties } from 'react'
export interface BoxShape {
  size: CSSProperties['width']
  radius: CSSProperties['borderRadius']
  borderWidth: CSSProperties['outlineWidth']
  elevationSize: 'lg' | 'md' | 'sm' | 'xs'
}
