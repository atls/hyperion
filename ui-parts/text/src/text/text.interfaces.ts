import type { SprinklesFn }    from 'rainbow-sprinkles'
import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'

import type { TextSprinkles }  from './text.css.js'

export interface BaseTextProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  ref?: Ref<HTMLSpanElement>
}

export interface TextElementProps extends BaseTextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprinkles: SprinklesFn<any>
}

export interface TextProps extends TextSprinkles, BaseTextProps {}
