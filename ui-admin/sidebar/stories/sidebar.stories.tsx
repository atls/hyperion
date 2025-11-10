/* eslint-disable @next/next/no-img-element */

import type { SidebarProps }   from '@atls-ui-examples/sidebar'
import type { Meta }           from '@storybook/react'
import type { StoryObj }       from '@storybook/react'
import type { ReactElement }   from 'react'

import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { PersonIcon }          from '@radix-ui/react-icons'
import { ReaderIcon }          from '@radix-ui/react-icons'
import { RowsIcon }            from '@radix-ui/react-icons'

import { ThemeProvider }       from '@atls-ui-admin/theme'
import { Sidebar }             from '@atls-ui-examples/sidebar'

import adminLogo               from './admin-logo.png'

const StorySidebar = (props: SidebarProps): ReactElement => (
  <ThemeProvider>
    <Sidebar {...props} />
  </ThemeProvider>
)

const meta: Meta<SidebarProps> = {
  title: 'Examples/Sidebar',

  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'smallmobile',
    },
  },

  component: StorySidebar,
}

export const Base: StoryObj<SidebarProps> = {
  args: {
    logo: <img src={adminLogo} alt='logo' style={{ height: 40 }} />,
    items: [
      {
        icon: RowsIcon,
      },
      {
        icon: MixerHorizontalIcon,
      },
      {
        icon: PersonIcon,
      },
      {
        icon: ReaderIcon,
      },
    ],
  },
}

export default meta
