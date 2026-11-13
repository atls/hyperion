import type { PropsWithChildren } from 'react'

import { containerStyles }        from './styles.css.js'
export const Container = ({ children }: PropsWithChildren) => (
  <span aria-hidden='true' className={containerStyles}>
    {children}
  </span>
)
