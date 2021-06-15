import React, { forwardRef }                 from 'react'
import { useState }                          from 'react'
import { Input }                             from '@atls-ui-proto/input'

import { Datepicker as DatepickerComponent } from './datepicker.component'

export default {
  title: 'Components/Datepicker',
}
// @ts-ignore
const CustomInput = forwardRef(({ value, onClick, customValue }, ref) => (
  // @ts-ignore
  <Input ref={ref} value={customValue} onClick={onClick} />
))

export const Datepicker = (props) => {
  const [startDate, setStartDate] = useState(new Date('2021/06/07'))
  const [endDate, setEndDate] = useState(new Date('2021/06/17'))

  const handleDateChange = (date) => {
    if (date.getTime() > endDate.getTime()) {
      setStartDate(endDate)
      setEndDate(date)
      return
    }
    setStartDate(date)
  }

  return (
    <DatepickerComponent
      isClearable
      strictParsing
      dateFormat='dd.MM.yy'
      startDate={startDate}
      endDate={endDate}
      selected={startDate}
      onChange={handleDateChange}
      customInput={
        <CustomInput
          // @ts-ignore
          customValue={`${Intl.DateTimeFormat('ru').format(startDate)}-${Intl.DateTimeFormat(
            'ru'
          ).format(endDate)}`}
        />
      }
      {...props}
    />
  )
}

Datepicker.args = {
  arrowColor: '#376EFF',
  arrowHoverColor: '#376EFF',
  cellColor: null,
  cellFontColor: '#262C34',
  cellActiveColor: '#376EFF',
  cellActiveFontColor: '#FFFFFF',
  cellHoverColor: null,
  cellHoverFontColor: null,
  cellInRangeBorderRadius: 0,
  cellInRangeColor: 'rgba(70, 120, 251, 0.16)',
  cellInRangeFontColor: '#376EFF',
  cellInRangeHoverColor: '#376EFF',
  cellInRangeHoverFontColor: '#FFFFFF',
  cellMargin: 0,
  cellPadding: 14,
  cellBorderRadius: 4,
  dividerPosition: 'middle',
  dividerWidth: '1px',
  dividerColor: 'rgba(0,0,0,0.08)',
  fontFamily: 'Gordita, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  headerBackgroundColor: 'white',
  inputActiveBorderColor: '#376EFF',
  inputBorderColor: 'silver',
  inputBorderWidth: 1,
  inputBorderRadius: 6,
  inputPadding: '12px 14px',
}

Datepicker.argTypes = {
  arrowColor: {
    name: 'Цвет стрелки',
    description: 'Цвет стрелки',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  arrowHoverColor: {
    name: 'Цвет стрелки при наведении',
    description: 'Цвет стрелки при наведении',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  cellColor: {
    name: 'Цвет ячейки',
    description: 'Цвет ячейки',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  cellFontColor: {
    name: 'Цвет текста в ячейке',
    description: 'Цвет текста в ячейке',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  cellActiveColor: {
    name: 'Активный цвет ячейки',
    description: 'Активный цвет ячейки',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  cellActiveFontColor: {
    name: 'Активный цвет текста в ячейке',
    description: 'Активный цвет текста в ячейке',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  cellHoverColor: {
    name: 'Цвет ячейки при наведении',
    description: 'Цвет ячейки при наведении',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  cellHoverFontColor: {
    name: 'Цвет текста в ячейке при наведении',
    description: 'Цвет текста в ячейке при наведении',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  cellMargin: {
    name: 'Внешний отступ ячейки',
    description: 'Внешний отступ ячейки',
    table: {
      category: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  cellPadding: {
    name: 'Внутренний отступ ячейки',
    description: 'Внутренний отступ ячейки',
    table: {
      category: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  cellBorderRadius: {
    name: 'Закругление ячейки',
    description: 'Закругление ячейки',
    table: {
      category: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  cellInRangeBorderRadius: {
    name: 'Закругление ячейки в выбранном диапазоне',
    description: 'Закругление ячейки в выбранном диапазоне',
    table: {
      category: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  cellInRangeColor: {
    name: 'Цвет ячейки в выбранном диапазоне',
    description: 'Цвет ячейки в выбранном диапазоне',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  cellInRangeFontColor: {
    name: 'Цвет текста ячейки в выбранном диапазоне',
    description: 'Цвет текста ячейки в выбранном диапазоне',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  cellInRangeHoverColor: {
    name: 'Цвет ячейки в выбранном диапазоне при наведении',
    description: 'Цвет ячейки в выбранном диапазоне при наведении',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  cellInRangeHoverFontColor: {
    name: 'Цвет текста ячейки в выбранном диапазоне при наведении',
    description: 'Цвет текста ячейки в выбранном диапазоне при наведении',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  headerBackgroundColor: {
    name: 'Цвет шапки календаря',
    description: 'Цвет шапки календаря',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  inputBorderColor: {
    name: 'Цвет рамки поля для ввода',
    description: 'Цвет рамки поля для',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  inputActiveBorderColor: {
    name: 'Цвет рамки поля для ввода в активном состоянии',
    description: 'Цвет рамки поля для ввода в активном состоянии',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  inputBorderWidth: {
    name: 'Толщина рамки поля для ввода',
    description: 'Толщина рамки поля для ввода',
    table: {
      category: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  inputBorderRadius: {
    name: 'Закругление поля для ввода',
    description: 'Закругление поля для ввода',
    table: {
      category: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  inputPadding: {
    name: 'Внутренний отступ поля для ввода',
    description: 'Внутренний отступ поля для ввода',
    table: {
      category: 'Форма',
    },
    control: {
      type: 'text',
    },
  },
  dividerPosition: {
    name: 'Позиция разделителя',
    description: 'Позиция разделителя',
    table: {
      category: 'Форма',
    },
    control: {
      type: 'radio',
      options: ['middle', 'bottom', 'none'],
    },
  },
  dividerWidth: {
    name: 'Толщина разделителя',
    description: 'Толщина разделителя',
    table: {
      category: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  dividerColor: {
    name: 'Цвет разделителя',
    description: 'Цвет разделителя',
    table: {
      category: 'Представление',
      subcategory: 'Цвет',
    },
    control: {
      type: 'color',
    },
  },
  fontFamily: {
    name: 'Форма шрифта',
    description: 'Форма шрифта',
    table: {
      category: 'Шрифт',
    },
    control: {
      type: 'text',
    },
  },
  fontWeight: {
    name: 'Толщина шрифта',
    description: 'Толщина шрифта',
    table: {
      category: 'Шрифт',
    },
    control: {
      type: 'radio',
      options: ['normal', 'bold'],
    },
  },
  fontStyle: {
    name: 'Стиль шрифта',
    description: 'Стиль шрифта',
    table: {
      category: 'Шрифт',
    },
    control: {
      type: 'radio',
      options: ['normal', 'italic', 'oblique', 'inherit'],
    },
  },
}
