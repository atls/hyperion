import type { ButtonProps }  from '@atls-ui-admin/button'
import type { Meta }         from '@storybook/react'
import type { StoryObj }     from '@storybook/react'
import type { ReactNode }    from 'react'

import { useTheme }          from 'next-themes'

import { ThemeProvider }     from '@atls-ui-admin/theme'

import { Button }            from '../src/button.component.js'
import { buttonAppearances } from '../src/styles/appearance.css.js'
import { buttonShapes }      from '../src/styles/shape.css.js'

type ButtonAppearanceName = keyof typeof buttonAppearances
type ButtonShapeName = keyof typeof buttonShapes

interface ButtonStoryProps {
  appearance: ButtonAppearanceName
  children: string
  shape: ButtonShapeName
}

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

const meta: Meta<ButtonStoryProps> = {
  title: 'Admin/Button',
  render: ({ appearance, shape, ...props }) => (
    <ThemeProvider>
      <ToggleTheme
        {...props}
        appearance={buttonAppearances[appearance]}
        shape={buttonShapes[shape]}
      />
    </ThemeProvider>
  ),
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      description: 'Вариант кнопки',
      control: { type: 'inline-radio' },
      options: Object.keys(buttonAppearances),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      },
    },
    shape: {
      description: 'Размер кнопки',
      control: { type: 'select' },
      options: Object.keys(buttonShapes),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'huge' },
      },
    },
  },
}

export default meta

type Story = StoryObj<ButtonStoryProps>

export const ToggleThemeButton: Story = {
  name: 'Toggle theme',
  args: {
    children: 'Text',
    appearance: 'blue',
    shape: 'huge',
  },
}
