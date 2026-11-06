import type { UseFloatReturn } from '@atls-utils/use-float'

import type { ArrowShape }     from './styles/shape/interfaces.js'

export interface ArrowProps {
  context: UseFloatReturn['context']
  arrowRef: UseFloatReturn['arrowRef']
  shape: ArrowShape
}
