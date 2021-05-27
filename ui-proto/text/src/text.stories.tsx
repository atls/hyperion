import React                     from 'react'

import { Text as TextComponent } from './index'

export default {
  title: 'Components/Text',
}

export const Text = (props) => <TextComponent {...props} />

Text.args = {
  children: 'Almost before we knew it, we had left the ground.',
  fontWeight: 400,
  fontSize: 16,
  color: 'black',
}

Text.argTypes = {
  children: {
    name: 'Контент',
    description: 'Основной контент, описание',
  },
  fontWeight: {
    name: 'Насыщенность шрифта',
    description: 'Насыщенность шрифта текста',
    control: {
      type: 'select',
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  fontSize: {
    name: 'Размер шрифта',
    description: 'Размер шрифта текста',
  },
  color: {
    name: 'Цвет текста',
    description: 'Цвет текста',
    control: {
      type: 'color',
    },
  },
}
