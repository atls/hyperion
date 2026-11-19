import type { ReactNode }      from 'react'

import type { BoxProps }       from './interfaces.js'

import { boxAppearanceStyles } from './styles/appearance/styles.css.js'
import { boxBaseStyles }       from './styles/base.css.js'

export const Box = ({ children, shape }: BoxProps): ReactNode => (
  <div className={`${boxAppearanceStyles} ${boxBaseStyles}`} style={shape}>
    {children}
  </div>
)
