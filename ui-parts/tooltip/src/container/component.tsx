import type { ReactNode }      from 'react'

import { baseContainerStyles } from './styles.css.js'

export const Container = (props: {}): ReactNode => (
  <div className={baseContainerStyles} {...props} />
)
