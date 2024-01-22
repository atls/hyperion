import { styleFn }                 from 'styled-system'

import { FullViewportHeightProps } from './styles.interfaces'

const fullViewportHeightStyles: styleFn = ({ fullViewportHeight }: FullViewportHeightProps) =>
  fullViewportHeight && {
    height: '100vh',
  }

export { fullViewportHeightStyles }
