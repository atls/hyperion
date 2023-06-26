import type { CssVariable }          from '../types'
import type { Display }              from '../types'
import type { NextFont }             from '../types'
import type { NextFontWithVariable } from '../types'

export type LocalFont<T extends CssVariable | undefined = undefined> = {
  src:
    | string
    | Array<{
        path: string
        weight?: string
        style?: string
      }>
  display?: Display
  weight?: string
  style?: string
  adjustFontFallback?: 'Arial' | 'Times New Roman' | false
  fallback?: string[]
  preload?: boolean
  variable?: T
  declarations?: Array<{ prop: string; value: string }>
}

export default function localFont<T extends CssVariable | undefined = undefined>(
  options: LocalFont<T>
): T extends undefined ? NextFont : NextFontWithVariable {
  throw new Error()
}
