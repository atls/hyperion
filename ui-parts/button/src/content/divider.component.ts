import styled                from '@emotion/styled'

import { FunctionComponent } from 'react'

import { DividerProps }      from './content.interfaces'

export const Divider: FunctionComponent<DividerProps> = styled.span<DividerProps>(({
  divider = 12,
}) => ({
  marginLeft: divider,
  display: 'flex',
}))
