import styled                      from '@emotion/styled'
import { FontAwesomeIcon }         from '@fortawesome/react-fontawesome'
import { faCog }                   from '@fortawesome/free-solid-svg-icons'

import React                       from 'react'
import { useRef }                  from 'react'

import { Column }                  from '@atls-ui-parts/layout'
import { Layout }                  from '@atls-ui-parts/layout'
import { Switch }                  from '@atls-ui-parts/switch'

import { ContainerElement }        from './container'
import { ExpanderElement }         from './expander'
import { ItemElement }             from './item'
import { ItemIconElement }         from './item'
import { ItemLabelElement }        from './item'
import { ItemsElement }            from './items'
import { PinnerElement }           from './pinner'
import { SidebarProps }            from './sidebar.interfaces'
import { WrapperElement }          from './wrapper'
import { baseContainerStyles }     from './container'
import { baseExpanderStyles }      from './expander'
import { useHover }                from './hooks'
import { usePinnedState }          from './hooks'
import { baseItemStyles }          from './item'
import { ifActiveItemModifier }    from './item'
import { baseItemIconStyles }      from './item'
import { baseItemLabelStyles }     from './item'
import { baseItemsStyles }         from './items'
import { basePinnerStyles }        from './pinner'
import { baseWrapperStyles }       from './wrapper'
import { ifPinnedWrapperModifier } from './wrapper'

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
