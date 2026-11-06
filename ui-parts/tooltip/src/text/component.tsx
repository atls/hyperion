import type { ReactNode }       from 'react'

import type { TextShape }       from './styles/shape/interfaces.js'

import { textAppearanceStyles } from './styles/appearance/styles.css.js'

export const Text = ({ text, shape }: { text: string; shape: TextShape }): ReactNode => (
  <span className={textAppearanceStyles} style={shape.typography}>
    {text}
  </span>
)
