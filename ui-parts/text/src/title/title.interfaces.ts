import type { SprinklesFn }    from 'rainbow-sprinkles'
import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'

import type { TitleSprinkles } from './title.css.js'

export interface BaseTitleProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  ref?: Ref<HTMLHeadingElement>
}

export interface TitleElementProps extends BaseTitleProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprinkles: SprinklesFn<ReadonlyArray<any>>
}

export interface TitleProps extends BaseTitleProps, TitleSprinkles {}
