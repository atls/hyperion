import type { ReactNode }      from 'react'

import type { BoxShape }       from './styles/shape/interfaces.js'

import { boxAppearanceStyles } from './styles/appearance/styles.css.js'
import { boxBaseStyles }       from './styles/base.css.js'

export const Box = ({ children, shape }: { children: ReactNode; shape: BoxShape }): ReactNode => (
  <div className={`${boxAppearanceStyles} ${boxBaseStyles}`} style={shape}>
    {children}
  </div>
)
