import styled      from '@emotion/styled'

import { styleFn } from 'styled-system'

export const createBaseNextImageStyles: styleFn = () => () => ({
  width: '100%',
  height: '100%',
})

export const NextImageWrapper = styled.div(createBaseNextImageStyles())
