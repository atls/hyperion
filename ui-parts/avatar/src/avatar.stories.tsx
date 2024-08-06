import { Meta }                 from '@storybook/react'
import { StoryObj }             from '@storybook/react'

import React                    from 'react'

import { TextTransform }        from '@atls-ui-parts/text-transform'

import { AvatarFallback }       from './avatar-fallback/index.js'
import { AvatarImage }          from './avatar-image/index.js'
import { Avatar as AvatarRoot } from './avatar/index.js'
import { AvatarVariants }       from './avatar/index.js'

interface AvatarProps extends AvatarVariants {
  image: string
  fallback: string
}

const meta: Meta<AvatarProps> = {
  title: 'Components/Avatar',
  render: ({ size, shape, image, fallback }) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
      <AvatarRoot shape={shape} size={size}>
        <AvatarImage src={image} />
        <AvatarFallback size={size}>
          <TextTransform firstLetter upperCase>
            {fallback}
          </TextTransform>
        </AvatarFallback>
      </AvatarRoot>
    </div>
  ),
  tags: ['autodocs'],
  argTypes: {
    image: {
      name: 'image',
      description: 'Основной контент, изображение',
      table: {
        category: 'Наполнение',
        type: { summary: 'string' },
      },
    },
    fallback: {
      name: 'fallback',
      description: 'Основной контент, описание',
      table: {
        category: 'Наполнение',
        type: { summary: 'string' },
      },
    },
    size: {
      name: 'size',
      description: 'Размер',
      control: { type: 'inline-radio' },
      options: ['small', 'normal', 'large'],
      table: {
        category: 'Форма',
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    shape: {
      name: 'shape',
      description: 'Форма кнопки',
      table: {
        category: 'Форма',
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' },
      },
      control: { type: 'inline-radio' },
      options: ['square', 'circle'],
    },
  },
}

export default meta

type Story = StoryObj<AvatarProps>

export const Avatar: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    fallback: 'Аватар',
    size: 'normal',
    shape: 'circle',
  },
}
