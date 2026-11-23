import type { NameAppearance } from './styles/appearance/interfaces.js'
import type { NameShape }      from './styles/shape/interfaces.js'
export interface NameProps {
  text: string
  shape: NameShape
  appearance: NameAppearance
}
