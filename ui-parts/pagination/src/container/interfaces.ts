import type { ComponentPropsWithRef } from 'react'

import type { ContainerShape }        from './styles/shape/interfaces.js'

export interface ContainerProps extends ComponentPropsWithRef<'nav'> {
  shape: ContainerShape
}
