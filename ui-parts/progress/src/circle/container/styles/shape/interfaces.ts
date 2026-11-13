import type { CSSProperties } from 'react'

type ContainerDimensions = Pick<
  CSSProperties,
  'aspectRatio' | 'height' | 'minHeight' | 'minWidth' | 'width'
>

export interface ContainerShape extends ContainerDimensions {
  padding?: CSSProperties['padding']
}
