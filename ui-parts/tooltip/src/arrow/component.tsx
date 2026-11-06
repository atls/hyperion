import type { ReactNode }        from 'react'

import type { ArrowProps }       from './interfaces.js'

import { FloatingArrow }         from '@floating-ui/react'

import { arrowAppearanceStyles } from './styles/appearance/styles.css.js'

export const Arrow = ({ context, arrowRef, shape }: ArrowProps): ReactNode => (
  <FloatingArrow
    ref={arrowRef}
    className={arrowAppearanceStyles}
    context={context}
    fill='currentColor'
    height={shape.height}
    width={shape.width}
  />
)
