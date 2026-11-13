import type { BoxAppearance }   from '../../box/styles/appearance/interfaces.js'
import type { CloseAppearance } from '../../close/styles/appearance/interfaces.js'

export interface ModalAppearance {
  box: BoxAppearance
  close: CloseAppearance
  backdropColor: string
}
