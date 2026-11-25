import type { CSSProperties } from 'react'

export interface ItemShape {
  width: string
  height: CSSProperties['height']
  borderRadius: CSSProperties['borderRadius']
  borderWidth: CSSProperties['borderWidth']
  hitAreaHeight: CSSProperties['minHeight']
}
