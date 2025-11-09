import type { Meta }                  from '@storybook/react'
import type { StoryObj }              from '@storybook/react'
import type { ReactElement }          from 'react'

import type { BottomNavigationProps } from './bottom-navigation.component.jsx'

import { MixerHorizontalIcon }        from '@radix-ui/react-icons'
import { PersonIcon }                 from '@radix-ui/react-icons'
import { ReaderIcon }                 from '@radix-ui/react-icons'
import { RowsIcon }                   from '@radix-ui/react-icons'
import React                          from 'react'

import { Column }                     from '@atls-ui-admin/layout'
import { Layout }                     from '@atls-ui-admin/layout'

import { BottomNavigation }           from './bottom-navigation.component.jsx'

const StoryBottomNavigation = (props: BottomNavigationProps): ReactElement => (
  <Column height='100%'>
    <Layout flexGrow={1} />
    <Layout>
      <BottomNavigation {...props} />
    </Layout>
  </Column>
)

const meta: Meta<BottomNavigationProps> = {
  title: 'Bottom Navigation',

  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'smallmobile',
    },
  },

  component: StoryBottomNavigation,
}

export const Base: StoryObj<BottomNavigationProps> = {
  args: {
    items: [
      {
        icon: MixerHorizontalIcon,
      },
      {
        icon: PersonIcon,
      },
      {
        icon: ReaderIcon,
      },
      {
        icon: RowsIcon,
      },
    ],
  },
}

export default meta
