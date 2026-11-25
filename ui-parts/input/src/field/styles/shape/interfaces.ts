import type { CSSProperties } from 'react'
export interface InputFieldShape {
  addonSlotSize?: CSSProperties['width']
  width: CSSProperties['width']
  unfilledWidth?: CSSProperties['width']
  paddingInline: CSSProperties['paddingInline']
  paddingBlock: CSSProperties['paddingBlock']
  gap: CSSProperties['gap']
  borderRadius: CSSProperties['borderRadius']
  borderWidth: CSSProperties['borderWidth']
  elevationSize: 'lg' | 'md' | 'sm' | 'xs'
}
