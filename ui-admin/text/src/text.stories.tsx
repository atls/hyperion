import type { Meta }              from '@storybook/react'
import type { StoryObj }          from '@storybook/react'
import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { TextProps }         from './text/index.js'

import { useTheme }               from 'next-themes'
import React                      from 'react'

import { Button }                 from '@atls-ui-admin/button'
import { Column }                 from '@atls-ui-admin/layout'
import { Layout }                 from '@atls-ui-admin/layout'
import { ThemeProvider }          from '@atls-ui-admin/theme'

import { Text }                   from './text/index.js'

const ToggleTheme: FC = (props) => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      style={{ width: 'fit-content', margin: '0 0 10px auto' }}
      onClick={(): void => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
      {...props}
    >
      Toggle Theme: {theme}
    </Button>
  )
}

interface TextStoryProps extends PropsWithChildren {
  fontWeight: number
  fontSize: number
  color: TextProps['color']
}

const meta: Meta<TextStoryProps> = {
  title: 'Admin/Text',
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
      control: { type: 'inline-radio' },
      options: ['$text.primary', '$text.secondary'],
    },
  },
}

export default meta

export const BaseText: StoryObj<TextStoryProps> = {
  name: 'Базовый',
  render: ({ children, fontWeight, fontSize, color }) => (
    <ThemeProvider>
      <ToggleTheme />
      <Column fill alignItems='center' justifyContent='center'>
        <Layout flexBasis='50px' />
        <Text style={{ fontWeight, fontSize }} color={color}>
          {children}
        </Text>
        <Layout flexBasis='50px' />
      </Column>
    </ThemeProvider>
  ),
  args: {
    fontWeight: 400,
    children: 'Almost before we knew it, we had left the ground.',
    fontSize: 16,
    color: '$text.primary',
  },
}
