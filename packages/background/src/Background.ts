import { backgroundImage, backgroundSize, system } from 'styled-system'

import styled                                      from '@emotion/styled'
import { Box }                                     from '@atlantis-lab/layout'

export const Background = styled(Box)<any>(
  ({ backgroundColor }) => ({
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor,
  }),
  backgroundSize,
  backgroundImage,
  system({
    cursor: true,
  })
)

Background.defaultProps = {
  display: 'flex',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}
