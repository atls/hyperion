import type { SprinklesFn }    from 'rainbow-sprinkles'
import type { HTMLAttributes } from 'react'

import type { TextSprinkles }  from './text.css.js'

export type BaseTextProps = Omit<HTMLAttributes<HTMLSpanElement>, 'color'>

export interface TextElementProps extends BaseTextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprinkles: SprinklesFn<any>
}

export interface TextProps extends TextSprinkles, BaseTextProps {}
