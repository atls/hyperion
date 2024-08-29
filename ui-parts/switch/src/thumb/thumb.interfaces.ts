import type { Variants }       from 'framer-motion'

import type { ThumbSprinkles } from './thumb.css.js'

export interface ThumbProps extends ThumbSprinkles {
  disabled?: boolean
  checked?: boolean
  variants?: Variants
}
