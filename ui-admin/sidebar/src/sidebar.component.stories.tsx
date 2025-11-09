/* eslint-disable @next/next/no-img-element */

import type { Meta }           from '@storybook/react'
import type { StoryObj }       from '@storybook/react'

import type { SidebarProps }   from './sidebar.component.jsx'

import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { PersonIcon }          from '@radix-ui/react-icons'
import { ReaderIcon }          from '@radix-ui/react-icons'
import { RowsIcon }            from '@radix-ui/react-icons'
import React                   from 'react'

import { Sidebar }             from './sidebar.component.jsx'

const meta: Meta<SidebarProps> = {
  title: 'Sidebar',

  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'smallmobile',
    },
  },

  component: Sidebar,
}

export const Base: StoryObj<SidebarProps> = {
  args: {
    logo: <img src='/images/admin-logos_transparent.png' alt='logo' style={{ height: 40 }} />,
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
