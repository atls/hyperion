import React                                from 'react'
import { useState }                         from 'react'
import { useMemo }                          from 'react'
import { useRef }                           from 'react'
import styled                               from '@emotion/styled'

import { fontNames, useGoogleFonts }        from '@atls/storybook-google-fonts'
import { ConditionalRender }                from '@au-parts/conditional-render'
import { ForwardEventsState }               from '@au-parts/events-state'
import { Box }                              from '@au-parts/layout'

import { createAttachmentAppearanceStyles } from './attachment'
import { createAttachmentBaseStyles }       from './attachment'
import { createAttachmentPositionStyles }   from './attachment'
import { createAttachmentShapeStyles }      from './attachment'
import { createBaseStyles }                 from './input'
import { createShapeStyles }                from './input'
import { createAppearanceStyles }           from './input'
import { RawInput }                         from './input'
import { createAddonsContainerStyles }      from './addon'
import { createAddonPositionStyles }        from './addon'

export default {
  title: 'Components/Input',
  parameters: {
    options: {
      enableShortcuts: false,
    },
  },
}

const getAddonPosition = (addonBefore, addonAfter) => {
  if (addonBefore && addonAfter) {
    return 'both'
  }

  if (addonBefore) {
    return 'left'
  }

  if (addonAfter) {
    return 'right'
  }

  return null
}

export const Input = ({
  containerWith,
  size,
  prefix,
  suffix,
  addonBefore,
  addonAfter,
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
  addonFontColor,
  addonBackgroundColor,
  addonBorderColor,
  rounding,
}) => {
  useGoogleFonts(fontFamily, fontWeight)

  const [value, setValue] = useState('контент')
  const ref = useRef<HTMLInputElement>(null)

  const Attachment = useMemo(
    () =>
      styled(ConditionalRender())(
        createAttachmentBaseStyles(),
        createAttachmentShapeStyles({
          fontFamily,
          fontSize,
          fontWeight,
        }),
        createAttachmentPositionStyles(6, 6),
        createAttachmentAppearanceStyles({
          fontColor,
        })
      ),
    [fontFamily, fontSize, fontWeight, fontColor]
  )

  const AddonsContainer = useMemo(
    () => styled.div(createAddonsContainerStyles(borderWidth)),
    [borderWidth]
  )

  const Addon = useMemo(
    () =>
      styled(ConditionalRender())(
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
          fontColor: addonFontColor,
          backgroundColor: addonBackgroundColor,
          borderColor: addonBorderColor,
        }),
        createAddonPositionStyles()
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
      addonFontColor,
      addonBackgroundColor,
      addonBorderColor,
    ]
  )

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

  const attach = getAddonPosition(addonBefore, addonAfter)

  return (
    <Box width={containerWith} justifyContent='center'>
      <AddonsContainer>
        <Addon>{addonBefore}</Addon>
        <ForwardEventsState ref={ref} events={['focus', 'blur']}>
          <StoryInput rounding={rounding} attach={attach}>
            <Attachment>{prefix}</Attachment>
            <RawInput ref={ref} value={value} onChange={(event) => setValue(event.target.value)} />
            <Attachment type='suffix'>{suffix}</Attachment>
          </StoryInput>
        </ForwardEventsState>
        <Addon position='after'>{addonAfter}</Addon>
      </AddonsContainer>
    </Box>
  )
}

Input.args = {
  containerWith: 300,
  prefix: '',
  suffix: '',
  addonBefore: '',
  addonAfter: '',
  size: 36,
  borderWidth: 1,
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: 12,
  shapeRounding: undefined,
  paddingLeft: 8,
  paddingRight: 12,
  fontColor: 'blue',
  backgroundColor: 'white',
  borderColor: 'blue',
  addonFontColor: 'white',
  addonBackgroundColor: 'blue',
  addonBorderColor: 'blue',
  rounding: 0,
}

Input.argTypes = {
  containerWith: {
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
  prefix: {
    name: 'Префикс',
    description: 'Дополнительная информация перед полем ввода',
    table: {
      category: 'Наполнение',
    },
  },
  suffix: {
    name: 'Суффикс',
    description: 'Дополнительная информация после поля ввода',
    table: {
      category: 'Наполнение',
    },
  },
  addonBefore: {
    name: 'Аддон слева',
    description: 'Дополнительная блок перед полем ввода',
    table: {
      category: 'Наполнение',
    },
  },
  addonAfter: {
    name: 'Аддон справа',
    description: 'Дополнительная блок после поля ввода',
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
  shapeRounding: {
    name: 'Скругление',
    description: 'Скругление углов кнопки',
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
  addonFontColor: {
    name: 'Цвет текста аддона',
    description: 'Цвет текста аддона',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
  addonBackgroundColor: {
    name: 'Цвет заливки аддона',
    description: 'Цвет текста аддона',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
  addonBorderColor: {
    name: 'Цвет обводки аддона',
    description: 'Цвет обводки аддона',
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
