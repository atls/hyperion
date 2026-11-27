import type { AutocompleteAnimation } from './interfaces.js'

import { animations }                 from '@atls-ui/theme'
import { opacity }                    from '@atls-ui/theme'

import { OPEN_DURATION }              from './constants.js'
import { INTERACTION_DURATION }       from './constants.js'
export const autocompleteAnimations: Record<'default', AutocompleteAnimation> = {
  default: {
    input: {
      unfilled: { duration: animations.duration.sm, easing: animations.easing.easeIn },
      filled: { duration: `${OPEN_DURATION}ms`, easing: animations.easing.easeOut },
      hover: { duration: INTERACTION_DURATION, easing: animations.easing.easeInOut },
      focused: { duration: animations.duration.sm, easing: animations.easing.easeOut },
      loading: { duration: INTERACTION_DURATION, easing: animations.easing.easeIn },
    },
    menu: {
      duration: { open: OPEN_DURATION, close: Number.parseFloat(animations.duration.sm) },
      initial: { opacity: opacity.none },
      open: { opacity: opacity.full, transitionTimingFunction: animations.easing.easeOut },
      close: { opacity: opacity.none, transitionTimingFunction: animations.easing.easeIn },
    },
  },
}
