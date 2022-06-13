import React                    from 'react'

import { TextTransform }        from '@atls-ui-parts/text-transform'

import { AvatarFallback }       from './avatar-fallback.component'
import { AvatarImage }          from './avatar-image.component'
import { Avatar as AvatarRoot } from './avatar.component'

export default {
  title: 'Components/Avatar',
}

export const Avatar = ({ size, shape, image, fallback }) => (
  <AvatarRoot shape={shape} size={size}>
    <AvatarImage src={image} />
    <AvatarFallback size={size}>
      <TextTransform firstLetter upperCase>
        {fallback}
      </TextTransform>
    </AvatarFallback>
  </AvatarRoot>
)

Avatar.args = {
  image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
  fallback: 'Аватар',
  size: 'normal',
  shape: 'circle',
}

Avatar.argTypes = {
  image: {
    name: 'Изображение',
    description: 'Основной контент, изображение',
    table: {
      category: 'Наполнение',
    },
  },
  fallback: {
    name: 'Контент',
    description: 'Основной контент, описание',
    table: {
      category: 'Наполнение',
    },
  },
  size: {
    name: 'Размер',
    description: 'Размер',
    control: {
      type: 'radio',
      options: ['small', 'normal', 'large'],
    },
    table: {
      category: 'Форма',
    },
  },
  shape: {
    name: 'Форма',
    description: 'Форма кнопки',
    table: {
      category: 'Форма',
    },
    control: {
      type: 'inline-radio',
      options: ['square', 'circle'],
    },
  },
}
