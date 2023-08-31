import styled from '@emotion/styled'

export interface BaseItemProps {
  active?: boolean
  href: string
  title?: string
  target?: string
}

const ItemElement = styled.a<BaseItemProps>()

export { ItemElement }
