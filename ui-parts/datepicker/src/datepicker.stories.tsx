/* eslint-disable react-hooks/rules-of-hooks */

import { Meta }             from '@storybook/react'
import { StoryObj }         from '@storybook/react'
import { useState }         from 'react'
import React                from 'react'

import { Input }            from '@atls-ui-parts/input'
import { Box }              from '@atls-ui-parts/layout'

import { Datepicker }       from './datepicker.component.js'
import { AppearanceStyles } from './utils/index.js'
import { ShapeStyles }      from './utils/index.js'

interface DatepickerStoryProps extends AppearanceStyles, ShapeStyles {
  showPopperArrow: boolean
}

const meta: Meta<DatepickerStoryProps> = {
  title: 'Components/Datepicker',
  render: (props) => {
    const [endDate, setEndDate] = useState<Date>(new Date('2021/06/17'))

    const [startDate, setStartDate] = useState<Date>(new Date('2021/06/07'))

    const handleDateChange = (date: Date | null) => {
      if (!date) return

      if (date.getTime() > endDate.getTime()) {
        setStartDate(endDate)
        setEndDate(date)
        return
      }

      setStartDate(date)
    }

    const dateRangeValue = `${Intl.DateTimeFormat('ru').format(startDate)}-${Intl.DateTimeFormat(
      'ru'
    ).format(endDate)}`

    return (
      <Box
        width='100%'
        height='300px'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Datepicker
          isClearable
          dateFormat='dd.MM.yy'
          strictParsing
          startDate={startDate}
          endDate={endDate}
          selected={startDate}
          onChange={handleDateChange}
          customInput={<Input value={dateRangeValue} />}
          {...props}
        />
      </Box>
    )
  },
  tags: ['autodocs'],
  argTypes: {
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
    showPopperArrow: {
      name: 'Показывать стрелку',
      description: 'Показывать стрелку',
      table: {
        category: 'Форма',
      },
      control: {
        type: 'boolean',
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
    currentMonthPadding: {
      name: 'Внешний отступ текущего месяца',
      description: 'Внешний отступ текущего месяца',
      table: {
        category: 'Форма',
      },
      control: {
        type: 'number',
      },
    },
    currentMonthFontFamily: {
      name: 'Форма шрифта текущего месяца',
      description: 'Форма шрифта текущего месяца',
      table: {
        category: 'Форма',
      },
      control: {
        type: 'text',
      },
    },
    currentMonthFontStyle: {
      name: 'Стиль шрифта текущего месяца',
      description: 'Стиль шрифта текущего месяца',
      table: {
        category: 'Форма',
      },
      control: {
        type: 'text',
      },
    },
    currentMonthFontWeight: {
      name: 'Толщина шрифта текущего месяца',
      description: 'Толщина шрифта текущего месяца',
      table: {
        category: 'Форма',
      },
      control: {
        type: 'number',
      },
    },
    currentMonthFontSize: {
      name: 'Размер шрифта текущего месяца',
      description: 'Размер шрифта текущего месяца',
      table: {
        category: 'Форма',
      },
      control: {
        type: 'text',
      },
    },
    currentMonthFontColor: {
      name: 'Цвет шрифта текущего месяца',
      description: 'Цвет шрифта текущего месяца',
      table: {
        category: 'Представление',
        subcategory: 'Цвет',
      },
      control: {
        type: 'color',
      },
    },
    dayNameFontFamily: {
      name: 'Форма шрифта дня недели',
      description: 'Форма шрифта дня недели',
      table: {
        category: 'Форма',
      },
      control: {
        type: 'text',
      },
    },
    dayNameFontStyle: {
      name: 'Стиль шрифта дня недели',
      description: 'Стиль шрифта дня недели',
      table: {
        category: 'Форма',
      },
      control: {
        type: 'text',
      },
    },
    dayNameFontColor: {
      name: 'Цвет шрифта дня недели',
      description: 'Цвет шрифта дня недели',
      table: {
        category: 'Представление',
        subcategory: 'Цвет',
      },
      control: {
        type: 'color',
      },
    },
    dayNameFontWeight: {
      name: 'Толщина шрифта дня недели',
      description: 'Толщина шрифта дня недели',
      table: {
        category: 'Форма',
      },
      control: {
        type: 'number',
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
        type: 'inline-radio',
      },
      options: ['middle', 'bottom', 'none'],
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
        type: 'inline-radio',
      },
      options: ['normal', 'bold'],
    },
    fontStyle: {
      name: 'Стиль шрифта',
      description: 'Стиль шрифта',
      table: {
        category: 'Шрифт',
      },
      control: {
        type: 'inline-radio',
      },
      options: ['normal', 'italic', 'oblique', 'inherit'],
    },
  },
}

export default meta

export const Base: StoryObj<DatepickerStoryProps> = {
  name: 'Базовый',
  args: {
    arrowColor: '#376EFF',
    arrowHoverColor: '#376EFF',
    showPopperArrow: true,
    cellColor: undefined,
    cellFontColor: '#262C34',
    cellActiveColor: '#376EFF',
    cellActiveFontColor: '#FFFFFF',
    cellHoverColor: undefined,
    cellHoverFontColor: undefined,
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
    currentMonthPadding: 10,
    currentMonthFontFamily: 'Gordita, sans-serif',
    currentMonthFontStyle: 'normal',
    currentMonthFontWeight: 400,
    currentMonthFontSize: 20,
    currentMonthFontColor: '#000000',
    dayNameFontFamily: 'Gordita, sans-serif',
    dayNameFontStyle: 'normal',
    dayNameFontWeight: 400,
    dayNameFontColor: '#000000',
  },
}
