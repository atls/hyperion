import type { CSSProperties } from 'react'

export interface AppearanceStyles {
  fontColor: CSSProperties['color']
  backgroundColor: CSSProperties['backgroundColor']
  border?: CSSProperties['border']
  borderColor?: CSSProperties['borderColor']
}
