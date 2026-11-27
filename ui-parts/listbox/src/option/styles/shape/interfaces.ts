import type { TypographyProperties } from '@atls-ui/theme'
import type { CSSProperties }        from 'react'
export interface OptionShape {
  paddingInline: CSSProperties['paddingInline']
  paddingBlock: CSSProperties['paddingBlock']
  gap: CSSProperties['gap']
  borderWidth: CSSProperties['borderWidth']
  borderRadius?: CSSProperties['borderRadius']
  typography: TypographyProperties
}
