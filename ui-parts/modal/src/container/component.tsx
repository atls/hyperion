import type { ReactNode }      from 'react'

import type { ContainerProps } from './interfaces.js'

import { containerStyles }     from './styles/base.css.js'
import { closeStyles }         from './styles/base.css.js'
import { loadingStyles }       from './styles/base.css.js'

export const Container = ({
  shape,
  close,
  children,
  actions,
  loading,
  loader,
}: ContainerProps): ReactNode => (
  <div className={containerStyles} style={{ gap: shape.gap }}>
    {close && <div className={closeStyles}>{close}</div>}
    {loading ? <div className={loadingStyles}>{loader}</div> : children}
    {actions}
  </div>
)
