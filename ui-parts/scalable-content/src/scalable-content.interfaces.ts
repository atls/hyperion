import { ReactNode } from 'react'
import { RefObject } from 'react'

export interface StyleResult {
  opacity: number
  transform: string
}

export interface UseScaleResult {
  ref: RefObject<HTMLDivElement>
  style: StyleResult
}

export interface ScalableContentProps {
  children: ReactNode
}
