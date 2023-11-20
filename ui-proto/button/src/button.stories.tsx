import React                         from 'react'

import { Button as ButtonComponent } from './button.component'

export default {
  title: 'Components/Button',
}

export const Button = ({ containerWith, childrenPrefix, childrenSuffix, children, ...props }) => (
  <div style={{ width: containerWith, display: 'flex', justifyContent: 'center' }}>
    <ButtonComponent {...props}>
      {childrenPrefix && <span>{childrenPrefix}</span>}
      {children}
      {childrenSuffix && <span>{childrenSuffix}</span>}
    </ButtonComponent>
  </div>
)

Button.args = {
  containerWith: 200,
  children: 'Кнопка',
  childrenPrefix: '',
  childrenSuffix: '',
  size: 'normal',
  $fill: false,
  rounding: 0,
  variant: 'primary',
  shape: 'rectangle',
  $inverted: false,
}

Button.argTypes = {
  containerWith: {
    name: 'Контейнер',
    description: 'Ширина контейнера',
    table: {
      category: 'Наполнение',
    },
    control: {
      type: 'range',
      min: 200,
      max: 1200,
      step: 10,
    },
  },
  children: {
    name: 'Контент',
    description: 'Основной контент, описание',
    table: {
      category: 'Наполнение',
    },
  },
  childrenPrefix: {
    name: 'Контент слева',
    description: 'Дополнительный контент слева, текст или иконка',
    table: {
      category: 'Наполнение',
    },
    control: {
      type: 'text',
    },
  },
  childrenSuffix: {
    name: 'Контент справа',
    description: 'Дополнительный контент справа, текст или иконка',
    table: {
      category: 'Наполнение',
    },
    control: {
      type: 'text',
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
  $fill: {
    name: 'Во всю ширину',
    description: 'Делает кнопку во всю ширину контейнера',
    table: {
      category: 'Форма',
    },
  },
  rounding: {
    name: 'Скругление',
    description: 'Устанавливает величину скругления',
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
      options: ['rectangle', 'square', 'circle'],
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
  $inverted: {
    name: 'Инвертированная',
    description: 'Прозрачная заливка, с обводкой и текстом одного цвета',
    table: {
      category: 'Внешний вид',
    },
  },
  contentAlign: {
    name: 'Выравнивание контента',
    description: 'Выравнивание контента',
    table: {
      category: 'Контент',
    },
    control: {
      type: 'select',
      options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-around'],
    },
  },
}
