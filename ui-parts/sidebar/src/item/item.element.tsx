import styled from '@emotion/styled'

export interface BaseItemProps {
  active?: boolean
  href: string
  target?: string
  title?: string
}

const ItemElement = styled.a<BaseItemProps>()

export { ItemElement }
