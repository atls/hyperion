import { ProgressGradient } from '../progress.interfaces'
import { ProgressLinecap }  from '../progress.interfaces'

export interface LineProps {
  percent: number | Array<number>
  strokeColor?: string | ProgressGradient | Array<string | ProgressGradient>
  strokeWeight?: number
  strokeLinecap?: ProgressLinecap
  trailLinecap?: ProgressLinecap
  trailColor?: string
}
