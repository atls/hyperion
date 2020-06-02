import styled             from '@emotion/styled'

import { ContainerProps } from '../types'

export const Container = styled.div<ContainerProps>(({ containerWidth }) => ({
  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  bottom: '-24px',
  zIndex: 3,
  width: `${containerWidth * 0.9}px`,
  left: `calc(50% - ${(containerWidth * 0.9) / 2}px)`,
}))
