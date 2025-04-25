import type { CSSProperties } from 'react'
import type { RefObject }     from 'react'

export interface StyleResult {
  opacity: CSSProperties['opacity']
  transform: CSSProperties['transform']
}

export interface UseScaleResult {
  ref: RefObject<HTMLDivElement | null>
  style: StyleResult
}
