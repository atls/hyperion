import styled                from '@emotion/styled'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { Layout }            from '@atls-ui-parts/layout'
import { Column }            from '@atls-ui-parts/layout'
import { Text }              from '@atls-ui-parts/text'

import { MenuItemProps }     from './menu-item.interface'
import { baseItemStyles }    from './menu-item.styles'

const Container = styled.li(baseItemStyles)

const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({ highlighted, children, ...props }) => (
  <Container {...props}>
    <Layout flexBasis={16} flexShrink={0} />
    <Column width='100%'>
      <Layout flexBasis={8} flexShrink={0} />
      <Column>
        <Layout flexBasis={6} flexShrink={0} />
        <Layout>
          <Text fontSize='semiRegular'>{children}</Text>
        </Layout>
        <Layout flexBasis={6} flexShrink={0} />
      </Column>
      <Layout flexBasis={8} flexShrink={0} />
    </Column>
    <Layout flexBasis={16} flexShrink={0} />
  </Container>
)

export { MenuItem }
