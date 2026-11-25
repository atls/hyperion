import type { IndicatorAppearance } from '../../indicator/appearance/interfaces.js'
import type { ItemAppearances }     from '../../item/styles/appearance/interfaces.js'
export interface PaginationAppearance {
  item: ItemAppearances
  indicator?: IndicatorAppearance
}
