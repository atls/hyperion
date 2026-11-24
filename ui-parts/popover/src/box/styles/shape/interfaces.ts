import type { CSSProperties } from 'react'

export interface BoxShape {
  borderRadius: CSSProperties['borderRadius']
  maxWidth: CSSProperties['maxWidth']
  paddingBlock: CSSProperties['paddingBlock']
  paddingInline: CSSProperties['paddingInline']
}
