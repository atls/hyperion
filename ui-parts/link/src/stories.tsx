import type { Meta }      from '@storybook/react'
import type { StoryObj }  from '@storybook/react'

import type { LinkProps } from './interfaces.js'

import { Link }           from './component.js'
const meta: Meta<LinkProps> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['standalone', 'inline'] },
    disabled: { control: 'boolean' },
    icon: { control: false },
    shape: { control: 'object' },
    appearance: { control: 'select', options: ['standalone', 'inline'] },
  },
}
export default meta
export const Base: StoryObj<LinkProps> = {
  name: 'Базовый',
  args: { children: 'Some link', href: '#link-target', variant: 'standalone', disabled: false },
}
