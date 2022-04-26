import styled                            from '@emotion/styled'

import React                             from 'react'
import { useState }                      from 'react'
import { styleFn }                       from 'styled-system'
import { ifProp }                        from 'styled-tools'

import { ConditionalRender }             from '@atls-ui-parts/conditional-render'
import { HiddenInput }                   from '@atls-ui-parts/hidden-input'
import { fontNames }                     from '@atls/storybook-google-fonts'
import { useGoogleFonts }                from '@atls/storybook-google-fonts'

import { createBoxBaseStyles }           from './box'
import { createBoxShapeStyles }          from './box'
import { createBoxAppearanceStyles }     from './box'
import { createCheckBaseStyles }         from './check'
import { createCheckAppearanceStyles }   from './check'
import { createCheckShapeStyles }        from './check'
import { createContainerBaseStyles }     from './container'
import { createContainerPositionStyles } from './container'
import { createLabelAppearanceStyles }   from './label'
import { createLabelShapeStyles }        from './label'
import { createLabelPositionStyles }     from './label'

export default { title: 'Components/Checkbox' }

export const Checkbox = ({
  type,
  fontColor,
  fontSize,
  fontWeight,
  fontFamily,
  labelPosition,
  offset,
  size,
  borderWidth,
  borderRadius,
  borderColor,
  backgroundColor,
  checkedBorderColor,
  checkedBackgroundColor,
  checkSize,
  checkColor,
  shape,
  children,
}) => {
  const [checked, setChecked] = useState<boolean>(false)
  useGoogleFonts(fontFamily, fontWeight)

  const createCheckCheckedStyles = (): styleFn =>
    ifProp(
      'checked',
      {
        display: 'block',
      },
      { display: 'none' }
    )

  const Container = styled.div(createContainerBaseStyles(), createContainerPositionStyles())

  const Box = styled.div(
    createBoxBaseStyles(),
    createBoxShapeStyles({
      size,
      borderWidth,
      borderRadius,
    }),
    createBoxAppearanceStyles({
      borderColor,
      backgroundColor,
    }),
    ifProp(
      'checked',
      createBoxAppearanceStyles({
        borderColor: checkedBorderColor,
        backgroundColor: checkedBackgroundColor,
      })
    )
  ) as styleFn

  const Label = styled(ConditionalRender())(
    createLabelShapeStyles({
      fontSize,
      fontWeight,
      fontFamily,
    }),
    createLabelAppearanceStyles({
      fontColor,
    }),
    createLabelPositionStyles({
      margin: offset,
    })
  )

  const Checkmark = styled.div(
    createCheckBaseStyles(),
    createCheckAppearanceStyles({
      color: checkColor,
    }),
    createCheckShapeStyles({
      size: checkSize,
    }),
    createCheckCheckedStyles()
  )

  const Radio = styled.div(
    createCheckBaseStyles(),
    createCheckAppearanceStyles({
      backgroundColor: checkColor,
    }),
    createCheckShapeStyles({
      borderRadius: '50%',
      size: checkSize,
    }),
    createCheckCheckedStyles()
  )

  return (
    <Container labelPosition={labelPosition} onClick={() => setChecked(!checked)}>
      <HiddenInput
        type={type}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
      <Box checked={checked} shape={shape}>
        {type === 'checkbox' && (
          <Checkmark checked={checked}>
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z'
              />
            </svg>
          </Checkmark>
        )}
        {type === 'radio' && <Radio checked={checked} />}
      </Box>
      <Label position={labelPosition}>{children}</Label>
    </Container>
  )
}

Checkbox.args = {
  children: 'Переключатель',
  type: 'checkbox',
  labelPosition: 'end',
  shape: 'square',
  fontColor: 'black',
  backgroundColor: 'white',
  checkedBackgroundColor: 'white',
  checkColor: 'blue',
  borderWidth: 1,
  borderColor: 'blue',
  checkedBorderColor: 'blue',
  offset: 10,
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: 12,
  size: 24,
  borderRadius: 4,
  checkSize: 16,
}

Checkbox.argTypes = {
  children: {
    name: 'Текст',
    description: 'Текст рядом',
    table: {
      category: 'Наполнение',
    },
  },
  type: {
    name: 'Тип переключателя',
    description: 'Выбор типа переключателя',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    control: {
      type: 'inline-radio',
      options: ['checkbox', 'radio'],
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
  shape: {
    name: 'Форма',
    description: 'Форма кнопки',
    table: {
      category: 'Модификаторы',
      subcategory: 'Форма',
    },
    control: {
      type: 'inline-radio',
      options: ['square', 'circle'],
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
    description: 'Цвет заливки',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
  checkedBackgroundColor: {
    name: 'Активный цвет заливки',
    description: 'Активный цвет заливки',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
  checkColor: {
    name: 'Цвет отметки',
    description: 'Цвет отметки',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
  borderWidth: {
    name: 'Размер обводки',
    description: 'Размер обводки',
    table: {
      category: 'Представление',
      subcategory: 'Обводка',
    },
    control: {
      type: 'number',
    },
  },
  borderColor: {
    name: 'Цвет обводки',
    description: 'Цвет обводки',
    table: {
      category: 'Представление',
      subcategory: 'Обводка',
    },
    control: {
      type: 'color',
    },
  },
  checkedBorderColor: {
    name: 'Активный цвет обводки',
    description: 'Активный цвет обводки',
    table: {
      category: 'Представление',
      subcategory: 'Обводка',
    },
    control: {
      type: 'color',
    },
  },
  offset: {
    name: 'Отступ',
    description: 'Отступ от текста',
    table: {
      category: 'Представление',
      subcategory: 'Контент',
    },
    control: {
      type: 'number',
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
  fontWeight: {
    name: 'Насыщенность шрифта',
    description: 'Насыщенность шрифта текста',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'select',
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  fontFamily: {
    name: 'Шрифт',
    description: 'Шрифт',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'select',
      options: fontNames,
    },
  },
  size: {
    name: 'Размер',
    description: 'Размер',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  borderRadius: {
    name: 'Скругление',
    description: 'Устанавливает величину скругления',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  checkSize: {
    name: 'Размер отметки',
    description: 'Размер отметки',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
}
