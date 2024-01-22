import { FlexboxProps }                           from 'styled-system'
import { LayoutProps as StyledSystemLayoutProps } from 'styled-system'
import { SpaceProps }                             from 'styled-system'

import { FillProps }                              from '../styles'
import { FullViewportHeightProps }                from '../styles'
import { FullViewportWidthProps }                 from '../styles'

export interface BoxSizingProps {
  boxSizing?: string
}

export type LayoutProps = FlexboxProps &
  StyledSystemLayoutProps &
  BoxSizingProps &
  SpaceProps &
  FillProps &
  FullViewportHeightProps &
  FullViewportWidthProps
