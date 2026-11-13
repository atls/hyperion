import type { BoxAppearance }      from '../../box/styles/appearance/interfaces.js'
import type { FallbackAppearance } from '../../fallback/styles/appearance/interfaces.js'
import type { LoadingAppearance }  from '../../loading/styles/appearance/interfaces.js'
export interface AvatarAppearance {
  box: BoxAppearance
  fallback: FallbackAppearance
  loading: LoadingAppearance
}
