import styled      from '@emotion/styled'

import { styleFn } from 'styled-system'

export const createBaseNextImageStyles: styleFn = () => () => ({
  height: '100%',
  width: '100%',
})

export const NextImageWrapper = styled.div(createBaseNextImageStyles())
