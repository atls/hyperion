import type { Theme }         from '@atls-ui/theme'
import type { CSSProperties } from 'react'

export interface LabelShape {
  typography: CSSProperties | ((theme: Theme) => CSSProperties)
}
