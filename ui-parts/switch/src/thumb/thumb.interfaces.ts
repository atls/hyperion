import { Variants }       from 'framer-motion'

import { ThumbSprinkles } from './thumb.css.js'

export interface ThumbProps extends ThumbSprinkles {
  disabled?: boolean
  checked?: boolean
  variants?: Variants
}
