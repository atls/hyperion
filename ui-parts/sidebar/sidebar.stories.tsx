import styled                                                         from '@emotion/styled'
import React, { useRef }                                              from 'react'
import { FontAwesomeIcon }                                            from '@fortawesome/react-fontawesome'
import { faCog }                                                      from '@fortawesome/free-solid-svg-icons'

import { Column, Layout }                                             from '@atls-ui-parts/layout'
import { Switch }                                                     from '@atls-ui-parts/switch'

import { ContainerElement, baseContainerStyles }                      from './container'
import { ExpanderElement, baseExpanderStyles }                        from './expander'
import { ItemElement, baseItemStyles, ifActiveItemModifier }          from './item'
import { ItemIconElement, baseItemIconStyles }                        from './item'
import { ItemLabelElement, baseItemLabelStyles }                      from './item'
import { ItemsElement, baseItemsStyles }                              from './items'
import { PinnerElement, basePinnerStyles }                            from './pinner'
import { SidebarProps }                                               from './sidebar.interfaces'
import { WrapperElement, baseWrapperStyles, ifPinnedWrapperModifier } from './wrapper'
import { useHover, usePinnedState }                                   from './hooks'

export default {
  title: 'Компоненты/Сайдбар/Примеры',
}

export const Base = () => {
  const Wrapper = styled(WrapperElement)(baseWrapperStyles, ifPinnedWrapperModifier())

  const Container = styled(ContainerElement)(baseContainerStyles, {
    background: '#ffffff',
  })

  const Expander = styled(ExpanderElement)(baseExpanderStyles)

  const Item = styled(ItemElement)(baseItemStyles, ifActiveItemModifier())

  const ItemIcon = styled(ItemIconElement)(baseItemIconStyles)

  const LabelIcon = styled(ItemLabelElement)(baseItemLabelStyles)

  const Items = styled(ItemsElement)(baseItemsStyles)

  const Pinner = styled(PinnerElement)(basePinnerStyles)

  const Sidebar = ({ children }: SidebarProps) => {
    const node = useRef<HTMLDivElement>(null)
    const [pinned, setPinned] = usePinnedState()
    const [hovered] = useHover(node)

    return (
      <Wrapper pinned={pinned}>
        <Container ref={node}>
          <Expander opened={pinned || hovered}>
            <Items>{children}</Items>

            <Pinner>
              <Switch checked={pinned} onChange={setPinned} />
            </Pinner>
          </Expander>
        </Container>
      </Wrapper>
    )
  }

  return (
    <Column>
      <Layout>
        <Sidebar>
          <Item active href='/'>
            <ItemIcon>
              <FontAwesomeIcon icon={faCog} />
            </ItemIcon>
            <LabelIcon>Test text</LabelIcon>
          </Item>
          <Item active={false} href='/'>
            <ItemIcon>
              <FontAwesomeIcon icon={faCog} />
            </ItemIcon>
            <LabelIcon>Test text</LabelIcon>
          </Item>
        </Sidebar>
      </Layout>
      <Layout p={40}>Content</Layout>
    </Column>
  )
}

Base.story = {
  name: 'Базовый',
}
