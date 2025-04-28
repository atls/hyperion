import type { ButtonProps } from '@atls-ui-parts/button'
import type { Meta }        from '@storybook/react'
import type { StoryObj }    from '@storybook/react'
import type { ReactNode }   from 'react'

import { useTheme }         from 'next-themes'
import React                from 'react'

import { ThemeProvider }    from '@atls-ui-admin/theme'

import { Button }           from '../src/button.component.js'

const ToggleTheme = (props: ButtonProps): ReactNode => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      style={{ width: 'fit-content' }}
      onClick={(): void => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
      {...props}
    >
      Toggle Theme: {theme}
    </Button>
  )
}

const meta: Meta<typeof Button> = {
  title: 'Admin/Button',
  render: (props) => (
    <ThemeProvider>
      <ToggleTheme {...props} />
    </ThemeProvider>
  ),
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Вариант кнопки',
      control: { type: 'inline-radio' },
      options: ['blue', 'lightBlue'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      },
    },
    size: {
      description: 'Размер кнопки',
      control: { type: 'select' },
      options: [
        'normal',
        'medium',
        'large',
        'small',
        'huge',
        'smallSizeMediumRadii',
        'autoSize',
        'semiMedium',
        'autoSizeRound',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'huge' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const ToggleThemeButton: Story = {
  name: 'Toggle theme',
  args: {
    children: 'Text',
    variant: 'blue',
    size: 'huge',
  },
}
