import type { LineContainerSprinkles } from '../line-container/line-container.css.js'
import type { ProgressGradient }       from '../progress.interfaces.js'
import type { ProgressLinecap }        from '../progress.interfaces.js'

export interface LineProps {
  percent: Array<number> | number
  strokeColor?: Array<ProgressGradient | string> | ProgressGradient | string
  strokeWeight?: number
  strokeLinecap?: ProgressLinecap
  trailLinecap?: ProgressLinecap
  trailColor?: LineContainerSprinkles['color']
}
