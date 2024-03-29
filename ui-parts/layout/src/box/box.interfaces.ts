import { BackgroundProps }         from 'styled-system'
import { BoxShadowProps }          from 'styled-system'
import { BorderProps }             from 'styled-system'
import { ColorProps }              from 'styled-system'
import { FlexboxProps }            from 'styled-system'
import { LayoutProps }             from 'styled-system'
import { PositionProps }           from 'styled-system'
import { SpaceProps }              from 'styled-system'

import { FillProps }               from '../styles'
import { FullViewportHeightProps } from '../styles'
import { FullViewportWidthProps }  from '../styles'

export interface BoxSystemProps {
  boxSizing?: string
}

export type BoxProps = FlexboxProps &
  LayoutProps &
  SpaceProps &
  BoxSystemProps &
  PositionProps &
  ColorProps &
  BorderProps &
  BoxShadowProps &
  BackgroundProps &
  FillProps &
  FullViewportHeightProps &
  FullViewportWidthProps
