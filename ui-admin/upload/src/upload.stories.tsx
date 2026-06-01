import type { ButtonProps }    from '@atls-ui-admin/button'
import type { Meta }           from '@storybook/react'
import type { StoryObj }       from '@storybook/react'
import type { ReactNode }      from 'react'

import { useTheme }            from 'next-themes'

import { Button }              from '@atls-ui-admin/button'
import { ThemeProvider }       from '@atls-ui-admin/theme'
import { buttonAppearances }   from '@atls-ui-admin/button'
import { buttonShapes }        from '@atls-ui-admin/button'

import { DropzonePlaceholder } from './index.js'
import { Upload }              from './index.js'

type ButtonAppearanceName = keyof typeof buttonAppearances
type ButtonShapeName = keyof typeof buttonShapes

interface UploadStoryProps {
  appearance: ButtonAppearanceName
  shape: ButtonShapeName
}

const ToggleTheme = (props: ButtonProps): ReactNode => {
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

const meta: Meta<UploadStoryProps> = {
  title: 'Admin/Upload',
  render: ({ appearance, shape }) => (
    <ThemeProvider>
      <ToggleTheme appearance={buttonAppearances[appearance]} shape={buttonShapes[shape]} />
      <Upload
        placeholder={
          <DropzonePlaceholder accept={['.SVG', '.PNG', '.JPG']}>
            Нажмите, чтобы загрузить
          </DropzonePlaceholder>
        }
      >
        <div style={{ height: 200, width: '100%' }} />
      </Upload>
    </ThemeProvider>
  ),
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: { type: 'inline-radio' },
      options: Object.keys(buttonAppearances),
    },
    shape: {
      control: { type: 'select' },
      options: Object.keys(buttonShapes),
    },
  },
}

export default meta

type Story = StoryObj<UploadStoryProps>

export const BaseUpload: Story = {
  name: 'Базовый',
  args: {
    appearance: 'blue',
    shape: 'huge',
  },
}
