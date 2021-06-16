import React                                from 'react'
import { useState }                         from 'react'
import { useMemo }                          from 'react'
import { useRef }                           from 'react'
import styled                               from '@emotion/styled'

import { fontNames, useGoogleFonts }        from '@atls/storybook-google-fonts'
import { ConditionalRender }                from '@atls-ui-parts/conditional-render'
import { ForwardEventsState }               from '@atls-ui-parts/events-state'
import { Box }                              from '@atls-ui-parts/layout'

import { createDividedFieldsRenderer }      from './factories'
import { createFieldAddonsContainerStyles } from './fields-addon'
import { createFieldAddonStyles }           from './fields-addon'
import { createDividerContainerStyles }     from './fields-addon'
import { createAppearanceStyles }           from './input'
import { createBaseStyles }                 from './input'
import { createShapeStyles }                from './input'
import { RawInput }                         from './input'

export default {
  title: 'Components/Input',
}

export const DividedFieldsInput = ({
  containerWidth,
  size,
  borderWidth,
  fontFamily,
  fontSize,
  fontWeight,
  shapeRounding,
  paddingLeft,
  paddingRight,
  fontColor,
  backgroundColor,
  borderColor,
  rounding,
  divider,
}) => {
  const [hrs, setHrs] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')
  const ref = useRef<HTMLInputElement>(null)

  useGoogleFonts(fontFamily, fontWeight)

  const StoryInput = useMemo(
    () =>
      styled.div(
        createBaseStyles(),
        createShapeStyles({
          size,
          borderWidth,
          fontFamily,
          fontSize,
          fontWeight,
          rounding: shapeRounding,
          paddingLeft,
          paddingRight,
        }),
        createAppearanceStyles({
          fontColor,
          backgroundColor,
          borderColor,
        })
      ),
    [
      size,
      borderWidth,
      fontFamily,
      fontSize,
      fontWeight,
      shapeRounding,
      paddingLeft,
      paddingRight,
      fontColor,
      backgroundColor,
      borderColor,
    ]
  )

  const FieldAddonsContainer = useMemo(
    () => styled.div(createFieldAddonsContainerStyles(size)),
    [size]
  )

  const FieldAddon = useMemo(() => styled.div(createFieldAddonStyles()), [])

  const DividerContainer = useMemo(
    () =>
      styled(ConditionalRender())(createDividerContainerStyles(paddingRight, paddingLeft, size)),
    [paddingRight, paddingLeft, size]
  )

  const DividedFields = useMemo(
    () =>
      createDividedFieldsRenderer({
        FieldAddonsContainer,
        FieldAddon,
        DividerContainer,
        divider,
      }),
    [FieldAddon, FieldAddonsContainer, DividerContainer, divider]
  )

  const Input = useMemo(
    () =>
      styled(RawInput)({
        textAlign: 'center',
      }),
    []
  )

  return (
    <Box width={containerWidth} justifyContent='center'>
      <ForwardEventsState ref={ref} events={['focus', 'blur']}>
        <StoryInput rounding={rounding}>
          <DividedFields>
            <Input
              ref={ref}
              value={hrs}
              placeholder='0'
              onChange={(event) => setHrs(event.target.value)}
            />
            <Input
              ref={ref}
              value={min}
              placeholder='00'
              onChange={(event) => setMin(event.target.value)}
            />
            <Input
              ref={ref}
              value={sec}
              placeholder='00'
              onChange={(event) => setSec(event.target.value)}
            />
          </DividedFields>
        </StoryInput>
      </ForwardEventsState>
    </Box>
  )
}

DividedFieldsInput.args = {
  size: 30,
  borderWidth: 1,
  borderColor: 'blue',
  divider: ':',
  paddingLeft: 10,
  paddingRight: 15,
  rounding: 6,
}

DividedFieldsInput.argTypes = {
  containerWidth: {
    name: 'Контейнер',
    description: 'Ширина контейнера',
    table: {
      category: 'Наполнение',
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
    name: 'Размер',
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
    control: {
      type: 'select',
      options: fontNames,
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
}
