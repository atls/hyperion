import { CSSProperties } from 'react'
import { RefObject }     from 'react'

export interface StyleResult {
  opacity: CSSProperties['opacity']
  transform: CSSProperties['transform']
}

export interface UseScaleResult {
  ref: RefObject<HTMLDivElement>
  style: StyleResult
}
