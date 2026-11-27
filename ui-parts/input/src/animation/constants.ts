import type { InputTransition } from './interfaces.js'

import { animations }           from '@atls-ui/theme'
export const DEFAULT_INPUT_TRANSITION: InputTransition = {
  duration: animations.duration.sm,
  easing: animations.easing.ease,
}
export const NO_INPUT_TRANSITION: InputTransition = {
  duration: animations.duration.none,
  easing: animations.easing.linear,
}
