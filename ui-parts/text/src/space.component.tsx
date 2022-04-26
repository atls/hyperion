import styled         from '@emotion/styled'

import React          from 'react'
import { FC }         from 'react'
import { layout }     from 'styled-system'

import { SpaceProps } from './space.interfaces'

const StyledSpace = styled.span(layout)

const Space: FC<SpaceProps> = ({ count = 1 }) => (
  <StyledSpace style={{ display: 'inline-flex' }}>{'\u00A0'.repeat(count)}</StyledSpace>
)

export { Space }
