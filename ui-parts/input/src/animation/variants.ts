import type { InputAnimation }      from './interfaces.js'

import { DEFAULT_INPUT_TRANSITION } from './constants.js'
import { NO_INPUT_TRANSITION }      from './constants.js'
export const inputAnimations: Record<'default' | 'none', InputAnimation> = {
  default: {
    unfilled: DEFAULT_INPUT_TRANSITION,
    filled: DEFAULT_INPUT_TRANSITION,
    hover: DEFAULT_INPUT_TRANSITION,
    focused: DEFAULT_INPUT_TRANSITION,
    loading: DEFAULT_INPUT_TRANSITION,
  },
  none: {
    unfilled: NO_INPUT_TRANSITION,
    filled: NO_INPUT_TRANSITION,
    hover: NO_INPUT_TRANSITION,
    focused: NO_INPUT_TRANSITION,
    loading: NO_INPUT_TRANSITION,
  },
}
