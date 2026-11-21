import type { ContainerShape } from '../../container/styles/shape/interfaces.js'
import type { FallbackShape }  from '../../fallback/styles/shape/interfaces.js'
import type { LoadingShape }   from '../../loading/styles/shape/interfaces.js'
import type { PictureShape }   from '../../picture/styles/shape/interfaces.js'
export interface ImageShape {
  container: ContainerShape
  picture: PictureShape
  fallback: FallbackShape
  loading: LoadingShape
}
