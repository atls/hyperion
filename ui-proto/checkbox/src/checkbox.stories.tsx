import React                             from 'react'
import { useState }                      from 'react'

import { Checkbox as CheckboxComponent } from './checkbox.component'

export default { title: 'Components/Checkbox' }

export const Checkbox = (props) => {
  const [active, setActive] = useState<boolean>(false)

  return <CheckboxComponent active={active} onCheck={setActive} {...props} />
}

Checkbox.args = {
  size: 'normal',
  variant: 'primary',
  children: 'Label',
}

Checkbox.argTypes = {
  variant: {
    name: 'Вариант',
    table: {
      category: 'Представление',
    },
    control: {
      type: 'radio',
      options: ['primary', 'secondary'],
    },
  },
  size: {
    name: 'Размер',
    table: {
      category: 'Форма',
    },
    control: {
      type: 'radio',
      options: ['normal', 'large'],
    },
  },
  labelPosition: {
    name: 'Положение текста',
    description: 'Положение текста',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    control: {
      type: 'inline-radio',
      options: ['end', 'start', 'top', 'bottom'],
    },
  },
  children: {
    name: 'Текст',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    control: {
      type: 'text',
    },
  },
}
