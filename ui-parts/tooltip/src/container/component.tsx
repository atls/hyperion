import type { HTMLAttributes } from 'react'
import type { ReactNode }      from 'react'

import { baseContainerStyles } from './container.css.js'

export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): ReactNode => (
  <div {...props} className={[baseContainerStyles, className].filter(Boolean).join(' ')} />
)
