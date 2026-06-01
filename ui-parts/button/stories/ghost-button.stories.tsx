import type { Meta }         from '@storybook/react'
import type { StoryObj }     from '@storybook/react'

import { Column }            from '@atls-ui-parts/layout'
import { Layout }            from '@atls-ui-parts/layout'
import { vars }              from '@atls-ui-parts/theme'

import { Button }            from '../src/button.component.js'
import { buttonAppearances } from '../src/styles/appearance.css.js'
import { buttonShapes }      from '../src/styles/shape.css.js'

const meta: Meta = {
  title: 'Components/Button',
  render: ({
    containerWidth,
    children,
    fontFamily,
    fontSize,
    fontColor,
    fontWeight,
    backgroundColor,
  }) => (
    <Column width='100%' maxWidth={`${containerWidth}px`} alignItems='center' margin='auto'>
      <Layout flexBasis='50px' />
      <Button
        appearance={buttonAppearances.ghost}
        shape={buttonShapes.ghost}
        style={{ color: fontColor, fontSize, fontWeight, backgroundColor, fontFamily }}
      >
        {children}
      </Button>
      <Layout flexBasis='50px' />
    </Column>
  ),
  tags: ['autodocs'],
  argTypes: {
    containerWidth: {
      name: 'Контейнер',
      description: 'Ширина контейнера',
      control: {
        type: 'range',
        min: 200,
        max: 600,
        step: 25,
      },
    },
    fontFamily: {
      name: 'Шрифт',
      description: 'Шрифт',
      control: { type: 'select' },
      options: [vars.fonts.primary],
    },
    fontWeight: {
      name: 'Насыщенность шрифта',
      description: 'Насыщенность шрифта текста',
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
      control: { type: 'number' },
    },
    fontColor: {
      name: 'Цвет текста',
      description: 'Цвет текста',
      control: { type: 'color' },
    },
    backgroundColor: {
      name: 'Цвет заливки',
      description: 'Цвет заднего фона',
      control: { type: 'color' },
    },
  },
}

export default meta

export const GhostButton: StoryObj = {
  args: {
    children: 'Кнопка',
    containerWidth: 200,
    fontFamily: vars.fonts.primary,
    fontWeight: 400,
    fontColor: 'black',
    fontSize: 12,
    backgroundColor: 'transparent',
  },
}
