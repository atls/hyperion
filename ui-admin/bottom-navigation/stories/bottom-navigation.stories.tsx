import type { BottomNavigationProps } from '@atls-ui-examples/bottom-navigation'
import type { Meta }                  from '@storybook/react'
import type { StoryObj }              from '@storybook/react'
import type { ReactElement }          from 'react'

import { MixerHorizontalIcon }        from '@radix-ui/react-icons'
import { PersonIcon }                 from '@radix-ui/react-icons'
import { ReaderIcon }                 from '@radix-ui/react-icons'
import { RowsIcon }                   from '@radix-ui/react-icons'

import { Column }                     from '@atls-ui-admin/layout'
import { Layout }                     from '@atls-ui-admin/layout'
import { ThemeProvider }              from '@atls-ui-admin/theme'
import { BottomNavigation }           from '@atls-ui-examples/bottom-navigation'

const StoryBottomNavigation = (props: BottomNavigationProps): ReactElement => (
  <ThemeProvider>
    <Column height='100%'>
      <Layout flexGrow={1} />
      <Layout>
        <BottomNavigation {...props} />
      </Layout>
    </Column>
  </ThemeProvider>
)

const meta: Meta<BottomNavigationProps> = {
  title: 'Examples/Bottom Navigation',

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
