import styled                     from '@emotion/styled'

import { BackdropElement }        from './backdrop.element'
import { baseBackdropStyles }     from './backdrop.styles'
import { backdropMotionVariants } from './backdrop.motion'

const Backdrop = styled(BackdropElement)(baseBackdropStyles)

Backdrop.defaultProps = {
  variants: backdropMotionVariants,
  initial: 'enter',
  animate: 'target',
  exit: 'exit',
}

export { Backdrop }
