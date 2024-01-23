import { styleFn }                from 'styled-system'

import { FullViewportWidthProps } from './styles.interfaces'

const fullViewportWidthStyles: styleFn = ({ fullViewportWidth }: FullViewportWidthProps) =>
  fullViewportWidth && {
    width: '100vw',
  }

export { fullViewportWidthStyles }
