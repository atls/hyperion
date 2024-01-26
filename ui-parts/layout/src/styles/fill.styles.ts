import { styleFn }   from 'styled-system'

import { FillProps } from './styles.interfaces'

const fillStyles: styleFn = ({ fill }: FillProps) =>
  fill && {
    height: '100%',
    width: '100%',
  }

export { fillStyles }
