export type LayerSide = 'left' | 'right' | 'top' | 'bottom' | 'center'

export interface ContainerComponentProps {
  content?: React.ReactElement
  showArrow?: boolean
  arrowStyle?: Object
  layerSide?: LayerSide
  title?: string
  animate?: boolean
}

export interface ContainerElementProps {
  animate?: boolean
  ref?: any
  style?: any
}
