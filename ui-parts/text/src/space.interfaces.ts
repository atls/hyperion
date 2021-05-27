import { LayoutProps } from 'styled-system'

export interface BaseSpaceProps {
  count?: number
}

export type SpaceProps = BaseSpaceProps & LayoutProps
