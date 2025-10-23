import type { ButtonProps }    from '@atls-ui-admin/button'
import type { Meta }           from '@storybook/react'
import type { StoryObj }       from '@storybook/react'
import type { ReactNode }      from 'react'

import { useTheme }            from 'next-themes'

import { Button }              from '@atls-ui-admin/button'
import { ThemeProvider }       from '@atls-ui-admin/theme'

import { DropzonePlaceholder } from './index.js'
import { Upload }              from './index.js'

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

const meta: Meta = {
  title: 'Admin/Upload',
  render: (props) => (
    <ThemeProvider>
      <ToggleTheme {...props} />
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
}

export default meta

type Story = StoryObj<typeof Button>

export const BaseUpload: Story = {
  name: 'Базовый',
}
