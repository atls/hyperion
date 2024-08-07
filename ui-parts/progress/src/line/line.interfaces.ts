import { LineContainerSprinkles } from '../line-container/line-container.css.js'
import { ProgressGradient }       from '../progress.interfaces.js'
import { ProgressLinecap }        from '../progress.interfaces.js'

export interface LineProps {
  percent: number | Array<number>
  strokeColor?: string | ProgressGradient | Array<string | ProgressGradient>
  strokeWeight?: number
  strokeLinecap?: ProgressLinecap
  trailLinecap?: ProgressLinecap
  trailColor?: LineContainerSprinkles['color']
}
