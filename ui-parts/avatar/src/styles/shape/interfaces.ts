import type { BoxShape }      from '../../box/styles/shape/interfaces.js'
import type { FallbackShape } from '../../fallback/styles/shape/interfaces.js'
import type { ImageShape }    from '../../image/styles/shape/interfaces.js'
import type { LoadingShape }  from '../../loading/styles/shape/interfaces.js'
export interface AvatarShape {
  box: BoxShape
  image: ImageShape
  fallback: FallbackShape
  loading: LoadingShape
}
