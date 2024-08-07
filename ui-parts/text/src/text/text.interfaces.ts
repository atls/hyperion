import { HTMLAttributes } from 'react'

import { TextSprinkles }  from './text.css.js'

export interface TextProps extends TextSprinkles, Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {}
