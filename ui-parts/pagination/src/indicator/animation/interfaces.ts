import type { CSSProperties } from 'react'

export interface PaginationKeyframes extends CSSProperties {
  borderShape?: string
  animationName: string
  animationDuration: NonNullable<CSSProperties['animationDuration']>
}

export interface PaginationAnimation {
  enter: Readonly<Record<string, PaginationKeyframes>>
  leave: Readonly<Record<string, PaginationKeyframes>>
  surface?: Partial<Record<PaginationAnimationPhase, PaginationKeyframes>>
}

export type PaginationAnimationPhase = 'enter' | 'leave'
