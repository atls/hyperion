import { styleFn }   from 'styled-system'

import { FillProps } from './styles.interfaces'

const fillStyles: styleFn = ({ fill }: FillProps) =>
  fill && {
    width: '100%',
    height: '100%',
  }

export { fillStyles }
