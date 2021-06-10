import React                         from 'react'
import { useState }                  from 'react'

import { Select as SelectComponent } from './select.component'

export default { title: 'Components/Select' }

export const Select = (props) => {
  const [value, setValue] = useState('')
  return (
    <SelectComponent
      label={value && value.length < 15 && value}
      placeholder='Toggle'
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
}
