import type { ProgressLinecap }         from '../progress.interfaces.js'
import type { ProgressStringGradients } from '../progress.interfaces.js'

export type GapPositionType = 'bottom' | 'left' | 'right' | 'top'

export interface CircleProps {
  percent: Array<number> | number
  strokeWeight?: number
  trailWidth?: number
  gapDegree?: number
  gapPosition?: GapPositionType
  trailColor?: string
  strokeLinecap?: ProgressLinecap
  strokeColor?: Array<ProgressStringGradients | string> | ProgressStringGradients | string
  width?: number | string
  height?: number | string
}

export interface PathStyle {
  stroke: string
  strokeDasharray: string
  strokeDashoffset: string
  transition: string
}

export interface GetPathStylesResult {
  pathString: string
  pathStyle: PathStyle
}
