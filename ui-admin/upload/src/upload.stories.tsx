import { Meta }                from '@storybook/react'
import { StoryObj }            from '@storybook/react'
import { FC }                  from 'react'
import { useTheme }            from 'next-themes'
import React                   from 'react'

import { Button }              from '@atls-ui-admin/button'
import { ThemeProvider }       from '@atls-ui-admin/theme'

import { DropzonePlaceholder } from './index.js'
import { Upload }              from './index.js'

const ToggleTheme: FC = (props) => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      style={{ width: 'fit-content', margin: '0 0 10px auto' }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
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
