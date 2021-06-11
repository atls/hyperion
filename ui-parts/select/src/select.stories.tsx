import React                         from 'react'
import { useState }                  from 'react'

import { Select as SelectComponent } from './select.component'

export default { title: 'Components/Select' }

export const Select = (props) => {
  const [value, setValue] = useState('')
  return (
    <SelectComponent
      label={value && value.length < 15 && value}
      items={['Item 1', 'Item 2', 'OVERLOAD '.repeat(15), 'Item 3']}
      onChange={(item) => {
        setValue(item)
      }}
      {...props}
    />
  )
}

Select.args = {
  width: 300,
  height: 50,
  arrow: true,
  arrowSize: 15,
  placeholder: 'Toggle',
  dropdownColor: 'lightSilver',
  hoverBackgroundColor: 'lightBlue',
  hoverFontColor: 'white',
}

Select.argTypes = {
  width: {
    name: 'Ширина',
    description: 'Ширина',
    table: {
      category: 'Представление',
      subcategory: 'Размеры',
    },
    control: {
      type: 'number',
    },
  },
  height: {
    name: 'Высота',
    description: 'Высота',
    table: {
      category: 'Представление',
      subcategory: 'Размеры',
    },
    control: {
      type: 'number',
    },
  },
  buttonColor: {
    name: 'Цвет кнопки',
    description: 'Цвет кнопки',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
  dropdownColor: {
    name: 'Цвет фона выпадающего окна',
    description: 'Цвет фона выпадающего окна',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
  hoverBackgroundColor: {
    name: 'Цвет фона при наведении',
    description: 'Цвет фона при наведении',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
  hoverFontColor: {
    name: 'Цвет текста при наведении',
    description: 'Цвет текста при наведении',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
  arrow: {
    name: 'Стрелка',
    description: 'Стрелка',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'boolean',
    },
  },
  arrowSize: {
    name: 'Размер стрелки',
    description: 'Размер стрелки',
    table: {
      category: 'Представление',
      subcategory: 'Размеры',
    },
    control: {
      type: 'number',
    },
  },
  placeholder: {
    name: 'Placeholder',
    description: 'Начальный текст',
    table: {
      category: 'Представление',
      subcategory: 'Значения',
    },
    control: {
      type: 'text',
    },
  },
}
