import type { CSSProperties } from 'react'

export interface BoxShape {
  width?: CSSProperties['width']
  minWidth?: CSSProperties['minWidth']
  borderRadius: CSSProperties['borderRadius']
  paddingTop: CSSProperties['paddingTop']
  paddingBottom: CSSProperties['paddingBottom']
  paddingInline: CSSProperties['paddingInline']
  gap: CSSProperties['gap']
}
