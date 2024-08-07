import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Meta }            from '@storybook/react'
import { StoryObj }        from '@storybook/react'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { faCog }           from '@fortawesome/free-solid-svg-icons'

import React               from 'react'

import { Item }            from './item'
import { ItemIcon }        from './item'
import { ItemLabel }       from './item'
import { Sidebar }         from './sidebar.component'

const meta: Meta = {
  title: 'Components/Sidebar',
  render: () => (
    <Column fill alignItems='center' justifyContent='center'>
      <Layout flexBasis='50px' />
      <Sidebar>
        <Item active href='/'>
          <ItemIcon>
            <FontAwesomeIcon icon={faCog} />
          </ItemIcon>
          <ItemLabel>Test text</ItemLabel>
        </Item>
        <Item active={false} href='/'>
          <ItemIcon>
            <FontAwesomeIcon icon={faCog} />
          </ItemIcon>
          <ItemLabel>Test text</ItemLabel>
        </Item>
      </Sidebar>
      <Layout flexBasis='50px' />
    </Column>
  ),
  tags: ['autodocs'],
}

export default meta

export const BaseSidebar: StoryObj = {
  name: 'Базовый',
}
