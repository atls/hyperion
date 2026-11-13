import type { Meta }        from '@storybook/react'
import type { StoryObj }    from '@storybook/react'

import type { AvatarProps } from './interfaces.js'

import { Avatar }           from './component.js'
import { boxForms }         from './box/styles/shape/variants.js'
import { avatarShapes }     from './styles/shape/variants.js'
interface AvatarStoryProps extends Omit<AvatarProps, 'shape'> {
  shape: keyof typeof avatarShapes
  form: keyof typeof boxForms
}
const meta: Meta<AvatarStoryProps> = {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  render: ({ form, shape = 'md', ...props }) => (
    <Avatar
      {...props}
      shape={{
        ...avatarShapes[shape],
        box: { ...avatarShapes[shape].box, radius: boxForms[form] },
      }}
    />
  ),
  argTypes: {
    shape: {
      name: 'Shape',
      control: 'select',
      options: Object.keys(avatarShapes),
    },
    form: { name: 'Form', control: 'select', options: Object.keys(boxForms) },
    appearance: { control: 'select', options: ['default'] },
    clickable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    loader: { control: false },
    imageProps: { control: false },
  },
}
export default meta
export const Base: StoryObj<AvatarStoryProps> = {
  name: 'Базовый',
  args: {
    appearance: 'default',
    alt: 'Username',
    fallback: 'U',
    src: 'https://avatars.mds.yandex.net/i?id=ab368c2eab64602b0573d03c822e789f34950dca-4869642-images-thumbs&n=13',
    form: 'circle',
    shape: 'md',
    clickable: true,
    disabled: false,
    loading: false,
  },
}
