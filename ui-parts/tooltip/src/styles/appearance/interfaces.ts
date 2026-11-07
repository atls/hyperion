import type { ArrowAppearance } from '../../arrow/styles/appearance/interfaces.js'
import type { BoxAppearance }   from '../../box/styles/appearance/interfaces.js'
import type { TextAppearance }  from '../../text/styles/appearance/interfaces.js'

export interface TooltipAppearance {
  box: BoxAppearance
  text: TextAppearance
  arrow: ArrowAppearance
}
