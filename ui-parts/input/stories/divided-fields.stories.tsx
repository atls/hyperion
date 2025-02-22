/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta }                    from '@storybook/react'
import type { StoryObj }                from '@storybook/react'

import { useRef }                       from 'react'
import { useState }                     from 'react'
import React                            from 'react'

import { Condition }                    from '@atls-ui-parts/condition'
import { ForwardEventsState }           from '@atls-ui-parts/events-state'
import { Box }                          from '@atls-ui-parts/layout'
import { vars }                         from '@atls-ui-parts/theme'

import { DividedFieldsContainer }       from '../src/divided-fields/index.js'
import { RawInput }                     from '../src/raw-input/index.js'
import { baseDividedFieldsInputStyles } from '../src/divided-fields/index.js'

const meta: Meta = {
  title: 'Components/Input',
  render: ({
    containerWidth,
    size,
    borderWidth,
    fontFamily,
    fontSize,
    fontWeight,
    paddingRight,
    paddingLeft,
    backgroundColor,
    fontColor,
    borderColor,
    rounding,
    divider,
  }) => {
    const [hrs, setHrs] = useState('')
    const [min, setMin] = useState('')
    const [sec, setSec] = useState('')
    const ref = useRef<HTMLInputElement>(null)

    const dividedFieldsContainerProps = {
      fontColor,
      backgroundColor,
      borderColor,
      size: `${size}px`,
      borderWidth: `${borderWidth}px`,
      fontFamily,
      fontSize: `${fontSize}px`,
      fontWeight,
      borderRadius: `${rounding}px`,
      paddingLeft: `${paddingLeft}px`,
      paddingRight: `${paddingRight}px`,
    }

    const dividedContainerProps = {
      alignItems: 'center',
      height: `${size}px`,
      paddingLeft: `${paddingLeft}px`,
      paddingRight: `${paddingRight}px`,
    }

    return (
      <Box fill flexDirection='column' alignItems='center' justifyContent='center'>
        <Box width={`${containerWidth}px`} justifyContent='center'>
          <ForwardEventsState ref={ref} events={['focus', 'blur']}>
            <DividedFieldsContainer {...dividedFieldsContainerProps}>
              <Box alignItems='center' width='100%' height={`${size}px`}>
                <RawInput
                  ref={ref}
                  className={baseDividedFieldsInputStyles}
                  value={hrs}
                  placeholder='0'
                  onChange={(event): void => {
                    setHrs(event.target.value)
                  }}
                />
                <Condition match={Boolean(divider)}>
                  <Box {...dividedContainerProps}>{divider}</Box>
                </Condition>
                <RawInput
                  ref={ref}
                  className={baseDividedFieldsInputStyles}
                  value={min}
                  placeholder='00'
                  onChange={(event): void => {
                    setMin(event.target.value)
                  }}
                />
                <Condition match={Boolean(divider)}>
                  <Box {...dividedContainerProps}>{divider}</Box>
                </Condition>
                <RawInput
                  ref={ref}
                  className={baseDividedFieldsInputStyles}
                  value={sec}
                  placeholder='00'
                  onChange={(event): void => {
                    setSec(event.target.value)
                  }}
                />
              </Box>
            </DividedFieldsContainer>
          </ForwardEventsState>
        </Box>
      </Box>
    )
  },
  tags: ['autodocs'],
  argTypes: {
    containerWidth: {
      name: 'Контейнер',
      description: 'Ширина контейнера',
      table: {
        category: 'Наполнение',
      },
      control: {
        type: 'range',
        min: 300,
        max: 1200,
        step: 10,
      },
    },
    size: {
      name: 'Размер',
      description: 'Высота',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: {
        type: 'number',
      },
    },
    borderWidth: {
      name: 'Размер обводки',
      description: 'Размер обводки',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: {
        type: 'number',
      },
    },
    fontFamily: {
      name: 'Шрифт',
      description: 'Шрифт',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: { type: 'select' },
      options: [vars.fonts.primary],
    },
    fontWeight: {
      name: 'Насыщенность шрифта',
      description: 'Насыщенность шрифта текста',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: {
        type: 'range',
        min: 400,
        max: 600,
        step: 100,
      },
    },
    fontSize: {
      name: 'Размер шрифта',
      description: 'Размер шрифта текста',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: {
        type: 'number',
      },
    },
    paddingLeft: {
      name: 'Отступ слева',
      description: 'Отступ слева от края до контента',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: {
        type: 'number',
      },
    },
    paddingRight: {
      name: 'Отступ справа',
      description: 'Отступ справа от края до контента',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: {
        type: 'number',
      },
    },
    fontColor: {
      name: 'Цвет текста',
      description: 'Цвет текста',
      table: {
        category: 'Представление',
        subcategory: 'Внешний вид',
      },
      control: {
        type: 'color',
      },
    },
    backgroundColor: {
      name: 'Цвет заливки',
      description: 'Цвет текста',
      table: {
        category: 'Представление',
        subcategory: 'Внешний вид',
      },
      control: {
        type: 'color',
      },
    },
    borderColor: {
      name: 'Цвет обводки',
      description: 'Цвет обводки',
      table: {
        category: 'Представление',
        subcategory: 'Внешний вид',
      },
      control: {
        type: 'color',
      },
    },
    rounding: {
      name: 'Скругление',
      description: 'Устанавливает величину скругления',
      table: {
        category: 'Модификаторы',
        subcategory: 'Форма',
      },
    },
  },
}

export default meta

export const DividedFields: StoryObj = {
  args: {
    size: 30,
    borderWidth: 1,
    borderColor: 'blue',
    divider: ':',
    paddingLeft: 10,
    paddingRight: 15,
    rounding: 6,
  },
}
