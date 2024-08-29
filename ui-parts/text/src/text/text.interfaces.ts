import type { SprinklesFn }    from 'rainbow-sprinkles/createRuntimeFn'
import type { HTMLAttributes } from 'react'

import type { TextSprinkles }  from './text.css.js'

export type BaseTextProps = Omit<HTMLAttributes<HTMLSpanElement>, 'color'>

export interface TextElementProps extends BaseTextProps {
  sprinkles: SprinklesFn<any>
}

export interface TextProps extends TextSprinkles, BaseTextProps {}
