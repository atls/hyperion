import type { SprinklesFn }        from 'rainbow-sprinkles'
import type { HTMLAttributes }     from 'react'
import type { Ref }                from 'react'

import type { ParagraphSprinkles } from './paragraph.css.js'

export interface BaseParagraphProps extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'> {
  ref?: Ref<HTMLParagraphElement>
}

export interface ParagraphElementProps extends BaseParagraphProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprinkles: SprinklesFn<ReadonlyArray<any>>
}

export interface ParagraphProps extends BaseParagraphProps, ParagraphSprinkles {}
