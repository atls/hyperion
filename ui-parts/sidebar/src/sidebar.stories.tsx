import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Meta }            from '@storybook/react'
import { StoryObj }        from '@storybook/react'
import { faCog }           from '@fortawesome/free-solid-svg-icons'

import React               from 'react'

import { Column }          from '@atls-ui-parts/layout'
import { Layout }          from '@atls-ui-parts/layout'

import { Item }            from './item/index.js'
import { ItemIcon }        from './item/index.js'
import { ItemLabel }       from './item/index.js'
import { Sidebar }         from './sidebar.component.js'

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
