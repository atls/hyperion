import { styleFn }         from 'styled-system'

import { FillHeightProps } from './styles.interfaces'

const fillHeightStyles: styleFn = ({ fillHeight }: FillHeightProps) =>
  fillHeight && {
    height: '100vh',
  }

export { fillHeightStyles }
