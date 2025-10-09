import type { Meta }     from '@storybook/react'
import type { StoryObj } from '@storybook/react'

import { Column }        from '@atls-ui-parts/layout'
import { Layout }        from '@atls-ui-parts/layout'

import { Item }          from './item/index.js'
import { ItemIcon }      from './item/index.js'
import { ItemLabel }     from './item/index.js'
import { Sidebar }       from './sidebar.component.js'

const meta: Meta = {
  title: 'Components/Sidebar',
  render: () => (
    <Column fill justifyContent='center'>
      <Layout flexBasis='50px' />
      <Sidebar>
        <Item active>
          <ItemIcon>⚙️</ItemIcon>
          <ItemLabel>Settings</ItemLabel>
        </Item>
        <Item active={false}>
          <ItemIcon>🍕</ItemIcon>
          <ItemLabel>Pizza</ItemLabel>
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
