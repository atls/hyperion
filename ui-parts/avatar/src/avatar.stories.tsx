import React                         from 'react'
import styled                        from '@emotion/styled'
import stringToColor                 from 'string-to-color'

import { fontNames, useGoogleFonts } from '@atls/storybook-google-fonts'

import { ImageBlock }                from '@atls-ui-parts/image'
import { ScalableContent }           from '@atls-ui-parts/scalable-content'
import { TextTransform }             from '@atls-ui-parts/text-transform'

// @ts-ignore
import { templates }                 from './avatar.templates'
import { createBaseStyles }          from './base'
import { createShapeStyles }         from './shape'
import { createAppearanceStyles }    from './appearance'

export default {
  title: 'Components/Avatar',
  parameters: {
    development: {
      templates,
    },
  },
}

export const Avatar = ({
  backgroundColor,
  borderColor,
  borderWidth,
  size,
  borderRadius,
  padding,
  fontColor,
  fontSize,
  fontWeight,
  fontFamily,
  shape,
  textBasedBackground,
  contentType,
  src,
  icon,
  text,
  alt,
}) => {
  useGoogleFonts(fontFamily, fontWeight)

  const StoryAvatar = styled.div(
    createBaseStyles(),
    createShapeStyles({
      size,
      borderRadius,
      borderWidth,
      padding,
      fontSize,
      fontWeight,
      fontFamily,
    }),
    createAppearanceStyles({
      backgroundColor,
      borderColor,
      fontColor,
    })
  )

  return (
    <StoryAvatar shape={shape} background={textBasedBackground ? stringToColor(text) : null}>
      {(contentType === 'image' && <ImageBlock src={src} alt={alt} />) ||
        (contentType === 'scalable-text' && <ScalableContent>{text}</ScalableContent>) ||
        (contentType === 'first-letter-text' && (
          <TextTransform firstLetter upperCase>
            {text}
          </TextTransform>
        )) ||
        (contentType === 'icon' && icon)}
    </StoryAvatar>
  )
}

Avatar.args = {
  contentType: 'scalable-text',
  src:
    'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?s=170x170',
  text: 'Аватар',
  fontColor: 'white',
  backgroundColor: 'blue',
  textBasedBackground: false,
  borderColor: 'blue',
  borderWidth: 4,
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: 16,
  size: 100,
  borderRadius: undefined,
  padding: 10,
  shape: 'circle',
  icon: '',
}

Avatar.argTypes = {
  text: {
    name: 'Текст',
    description: 'Текст внутри',
    table: {
      category: 'Наполнение',
    },
  },
  src: {
    name: 'Изображение',
    description: 'Адресс изображения',
    table: {
      category: 'Наполнение',
    },
  },
  contentType: {
    name: 'Контент',
    description: 'Выбор наполнения',
    table: {
      category: 'Наполнение',
    },
    control: {
      type: 'inline-radio',
      options: ['image', 'scalable-text', 'first-letter-text', 'icon'],
    },
  },
  size: {
    name: 'Размер',
    description: 'Размер аватара',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  padding: {
    name: 'Отступы',
    description: 'Отступы от контента',
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
  textBasedBackground: {
    name: 'Цвет на основе текста',
    description: 'Цвет на основе текста',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
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
  shape: {
    name: 'Форма',
    description: 'Форма аватара',
    table: {
      category: 'Модификаторы',
      subcategory: 'Форма',
    },
    control: {
      type: 'inline-radio',
      options: ['square', 'circle'],
    },
  },
  borderRadius: {
    name: 'Скругление',
    description: 'Устанавливает величину скругления',
    table: {
      category: 'Модификаторы',
      subcategory: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
}
