import { ProgressLinecap }         from '../progress.interfaces'
import { ProgressStringGradients } from '../progress.interfaces'

export type GapPositionType = 'top' | 'left' | 'right' | 'bottom'

export interface CircleProps {
  percent: number | Array<number>
  strokeWeight?: number
  trailWidth?: number
  gapDegree?: number
  gapPosition?: GapPositionType
  trailColor?: string
  strokeLinecap?: ProgressLinecap
  strokeColor?: string | ProgressStringGradients | Array<string | ProgressStringGradients>
  width?: number | string
  height?: number | string
}
