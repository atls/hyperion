import React                         from 'react'
import styled                        from '@emotion/styled'

import { fontNames, useGoogleFonts } from '@atls/storybook-google-fonts'

// @ts-ignore
import mdx                           from './button.docs.mdx'
import { templates }                 from './button.templates'
import { createBaseStyles }          from './base'
import { createShapeStyles }         from './shape'
import { createAppearanceStyles }    from './appearance'
import { createContentStyles }       from './content'
import { Content }                   from './content'

export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      page: mdx,
    },
    development: {
      templates,
    },
  },
}

export const Button = ({
  containerWith,
  children,
  childrenPrefix,
  childrenSuffix,
  size,
  fontFamily,
  fontSize,
  fontWeight,
  shapeRounding,
  paddingLeft,
  paddingRight,
  contentDivider,
  fontColor,
  backgroundColor,
  borderColor,
  invertedBorderWidth,
  shape,
  fill,
  rounding,
  inverted,
  contentAlign,
}) => {
  useGoogleFonts(fontFamily, fontWeight)

  const StoryButton = styled.button(
    createBaseStyles(),
    createContentStyles(),
    createShapeStyles({
      size,
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
      invertedBorderWidth,
    })
  )

  return (
    <div style={{ width: containerWith, display: 'flex', justifyContent: 'center' }}>
      <StoryButton
        fill={fill}
        shape={shape}
        rounding={rounding}
        inverted={inverted}
        contentAlign={contentAlign}
      >
        <Content divider={contentDivider}>
          {childrenPrefix && <span>{childrenPrefix}</span>}
          {children}
          {childrenSuffix && <span>{childrenSuffix}</span>}
        </Content>
      </StoryButton>
    </div>
  )
}

Button.args = {
  containerWith: 200,
  children: 'Кнопка',
  childrenPrefix: '',
  childrenSuffix: '',
  size: 36,
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: 12,
  shapeRounding: undefined,
  paddingLeft: undefined,
  paddingRight: undefined,
  contentDivider: 12,
  fontColor: 'white',
  backgroundColor: 'blue',
  borderColor: 'blue',
  invertedBorderWidth: 1,
  fill: false,
  rounding: 0,
  inverted: false,
  shape: 'rectangle',
  contentAlign: 'center',
}

Button.argTypes = {
  containerWith: {
    name: 'Контейнер',
    description: 'Ширина контейнера',
    table: {
      category: 'Наполнение',
    },
    control: {
      type: 'range',
      min: 200,
      max: 1200,
      step: 10,
    },
  },
  children: {
    name: 'Контент',
    description: 'Основной контент, описание',
    table: {
      category: 'Наполнение',
    },
  },
  childrenPrefix: {
    name: 'Контент слева',
    description: 'Дополнительный контент слева, текст или иконка',
    table: {
      category: 'Наполнение',
    },
    control: {
      type: 'text',
    },
  },
  childrenSuffix: {
    name: 'Контент справа',
    description: 'Дополнительный контент справа, текст или иконка',
    table: {
      category: 'Наполнение',
    },
    control: {
      type: 'text',
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
  invertedBorderWidth: {
    name: 'Ширина обводки',
    description: 'Ширина обводки',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'number',
    },
  },
  contentDivider: {
    name: 'Отступы контента',
    description: 'Отступы внутри контента',
    table: {
      category: 'Представление',
      subcategory: 'Контент',
    },
    control: {
      type: 'number',
    },
  },
  fill: {
    name: 'Во всю ширину',
    description: 'Делает кнопку во всю ширину контейнера',
    table: {
      category: 'Модификаторы',
      subcategory: 'Форма',
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
  inverted: {
    name: 'Инвертированная',
    description: 'Прозрачная заливка, с обводкой и текстом одного цвета',
    table: {
      category: 'Модификаторы',
      subcategory: 'Внешний вид',
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
      options: ['rectangle', 'square', 'circle'],
    },
  },
  contentAlign: {
    name: 'Выравнивание контента',
    description: 'Выравнивание контента',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    control: {
      type: 'select',
      options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-around'],
    },
  },
}
