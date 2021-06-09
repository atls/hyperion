import { ReactNode } from 'react'
import { RefObject } from 'react'

export interface StyleResult {
  transform: string
  opacity: number
}

export interface UseScaleResult {
  ref: RefObject<HTMLDivElement>
  style: StyleResult
}

export interface ScalableContentProps {
  children: ReactNode
}
