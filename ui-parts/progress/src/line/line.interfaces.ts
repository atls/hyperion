import { ProgressGradient, ProgressLinecap } from '../progress.interfaces'

export interface LineProps {
  percent: number | Array<number>
  strokeColor?: string | ProgressGradient | Array<string | ProgressGradient>
  strokeWidth?: number
  strokeLinecap?: ProgressLinecap
  trailLinecap?: ProgressLinecap
  trailColor?: string
}
