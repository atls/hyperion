import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
} from 'styled-system'

export interface LayerProps
  extends BorderProps,
    ColorProps,
    LayoutProps,
    ShadowProps,
    PositionProps,
    BackgroundProps,
    SpaceProps,
    FlexboxProps {
  appRoot?: string
  active: boolean
  setActive: (payload: any) => any
  outsideClick?: boolean
  children: any
}
