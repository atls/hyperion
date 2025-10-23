import type { Meta }                  from '@storybook/react'
import type { StoryObj }              from '@storybook/react'
import type { PropsWithChildren }     from 'react'

import { Column }                     from '@atls-ui-parts/layout'
import { Layout }                     from '@atls-ui-parts/layout'

import { Paragraph as BaseParagraph } from '../src/paragraph/index.js'
import { Text as BaseText }           from '../src/text/index.js'
import { Title as BaseTitle }         from '../src/title/index.js'

interface TextStoryProps extends PropsWithChildren {
  fontWeight: number
  fontSize: number
  color: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

const meta: Meta<TextStoryProps> = {
  title: 'Components/Text',
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'Контент',
      description: 'Основной контент, описание',
    },
    fontWeight: {
      name: 'Насыщенность шрифта',
      description: 'Насыщенность шрифта текста',
      control: { type: 'inline-radio' },
      options: [400, 500, 600],
    },
    fontSize: {
      name: 'Размер шрифта',
      description: 'Размер шрифта текста',
    },
    color: {
      name: 'Цвет текста',
      description: 'Цвет текста',
      control: { type: 'color' },
    },
  },
}

export default meta

export const Text: StoryObj<TextStoryProps> = {
  name: 'Базовый',
  render: ({ children, fontWeight, fontSize, color }) => (
    <Column fill alignItems='center' justifyContent='center'>
      <Layout flexBasis='50px' />
      <BaseText style={{ fontWeight, fontSize, color }}>{children}</BaseText>
      <Layout flexBasis='50px' />
    </Column>
  ),
  args: {
    fontWeight: 400,
    children: 'Almost before we knew it, we had left the ground.',
    color: 'black',
    fontSize: 16,
  },
}

export const Title: StoryObj<TextStoryProps> = {
  name: 'Заголовок',
  render: ({ children, fontWeight, fontSize, color, level }) => (
    <Column fill alignItems='center' justifyContent='center'>
      <Layout flexBasis='50px' />
      <Column>
        <BaseTitle fontSize='$moderate' level={level} style={{ fontWeight, fontSize, color }}>
          h{level}. {children}
        </BaseTitle>
        <Layout flexBasis='12px' />
        <BaseTitle fontSize='$large' level={2} style={{ fontWeight, color }}>
          h2. {children}
        </BaseTitle>
        <Layout flexBasis='12px' />
        <BaseTitle fontSize='$medium' level={6} style={{ fontWeight, color }}>
          h6. {children}
        </BaseTitle>
      </Column>
      <Layout flexBasis='50px' />
    </Column>
  ),
  argTypes: {
    level: {
      name: 'Уровень заголовка',
      description: 'Уровень заголовка',
      control: { type: 'inline-radio' },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
  args: {
    fontWeight: 600,
    children: 'Winter is coming.',
    color: '#3494B7',
    fontSize: 32,
    level: 1,
  },
}

export const Paragraph: StoryObj<TextStoryProps> = {
  name: 'Параграф',
  render: ({ children, fontWeight, fontSize, color }) => (
    <Column fill alignItems='center' justifyContent='center'>
      <Layout flexBasis='50px' />
      <BaseParagraph textIndent='2em' style={{ fontWeight, fontSize, color }}>
        {children}
      </BaseParagraph>
      <Layout flexBasis='50px' />
    </Column>
  ),
  args: {
    fontWeight: 400,
    children:
      'The common people pray for rain, healthy children, and a summer that never ends" Ser Jorah told her. "It is no matter to them if the high lords play their game of thrones, so long as they are left in peace." He gave a shrug. "They never are.',
    color: 'black',
    fontSize: 16,
  },
}
