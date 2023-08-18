export interface ContainerElementProps {
  animate?: boolean
  ref?: any
  style?: any
}

export interface DefaultContainerProps extends ContainerElementProps {
  text?: string | number
  arrow?: JSX.Element
}
