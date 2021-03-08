import {
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  system,
} from 'styled-system'

import styled  from '@emotion/styled'
import { Box } from '@atlantis-lab/layout'

export const Background = styled(Box)<any>(
  ({ backgroundColor }) => ({
    backgroundColor,
  }),
  backgroundSize,
  backgroundImage,
  backgroundRepeat,
  backgroundPosition,
  system({
    cursor: true,
  }),
)

Background.defaultProps = {
  display: 'flex',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'fixed',
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
}
