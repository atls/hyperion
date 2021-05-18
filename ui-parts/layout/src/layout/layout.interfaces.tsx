import { FlexboxProps }                           from 'styled-system'
import { LayoutProps as StyledSystemLayoutProps } from 'styled-system'
import { SpaceProps }                             from 'styled-system'

export interface BoxSizingProps {
  boxSizing?: string
}

export type LayoutProps = FlexboxProps & StyledSystemLayoutProps & SpaceProps & BoxSizingProps
