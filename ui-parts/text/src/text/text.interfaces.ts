import { HTMLAttributes }         from 'react'
import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { TextSprinkles }          from './text.css.js'

export type BaseTextProps = Omit<HTMLAttributes<HTMLSpanElement>, 'color'>

export interface TextElementProps extends BaseTextProps {
  sprinkles: ReturnType<typeof createRainbowSprinkles>
}

export interface TextProps extends TextSprinkles, BaseTextProps {}
