import type { ReactNode } from 'react'

import type { NameProps } from './interfaces.js'

import { nameStyles }     from './styles/base.css.js'
export const Name = ({ text, shape, appearance }: NameProps): ReactNode => (
  <span className={nameStyles} style={{ ...shape.typography, ...appearance }}>
    {text}
  </span>
)
