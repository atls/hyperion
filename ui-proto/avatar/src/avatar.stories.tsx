import React                         from 'react'

import { Avatar as AvatarComponent } from './avatar.component'

export default {
  title: 'Components/Avatar',
}

export const Avatar = (props) => <AvatarComponent {...props} />

Avatar.args = {
  children: 'Аватар',
  size: 'normal',
  shape: 'circle',
  variant: 'primary',
}

Avatar.argTypes = {
  children: {
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
  variant: {
    name: 'Вариант',
    description: 'Вариант внешнего вида',
    table: {
      category: 'Внешний вид',
    },
    control: {
      type: 'radio',
      options: ['primary'],
    },
  },
}
