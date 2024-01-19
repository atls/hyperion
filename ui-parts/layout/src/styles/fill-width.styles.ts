import { styleFn }        from 'styled-system'

import { FillWidthProps } from './styles.interfaces'

const fillWidthStyles: styleFn = ({ fillWidth }: FillWidthProps) =>
  fillWidth && {
    width: '100vw',
  }

export { fillWidthStyles }
