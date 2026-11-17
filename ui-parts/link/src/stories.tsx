import type { Meta }      from '@storybook/react'
import type { StoryObj }  from '@storybook/react'

import type { LinkProps } from './interfaces.js'

import { Link }           from './component.js'
interface LinkStoryProps extends Omit<LinkProps, 'shape'> {
  shape?: LinkProps['shape'] | 'default'
}
const meta: Meta<LinkStoryProps> = {
  title: 'Components/Link',
  render: ({ shape, ...props }) => (
    <Link {...props} shape={shape === 'default' ? undefined : shape} />
  ),
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['standalone', 'inline'] },
    disabled: { control: 'boolean' },
    icon: { control: false },
    shape: { control: 'select', options: ['default'] },
    appearance: { control: 'select', options: ['standalone', 'inline'] },
  },
}
export default meta
export const Base: StoryObj<LinkStoryProps> = {
  name: 'Базовый',
  args: {
    children: 'Some link',
    href: '#link-target',
    variant: 'standalone',
    shape: 'default',
    disabled: false,
  },
}
