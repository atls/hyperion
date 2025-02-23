import type { SprinklesFn }        from 'rainbow-sprinkles'
import type { HTMLAttributes }     from 'react'

import type { ParagraphSprinkles } from './paragraph.css.js'

export type BaseParagraphProps = Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>

export interface ParagraphElementProps extends BaseParagraphProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprinkles: SprinklesFn<ReadonlyArray<any>>
}

export interface ParagraphProps extends BaseParagraphProps, ParagraphSprinkles {}
