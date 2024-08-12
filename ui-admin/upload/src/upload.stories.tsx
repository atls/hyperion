import { MockedProvider }      from '@apollo/client/testing'
import { Meta }                from '@storybook/react'
import { StoryObj }            from '@storybook/react'

import React                   from 'react'
import { FC }                  from 'react'
import { useTheme }            from 'next-themes'

import { Button }              from '@atls-ui-admin/button'
import { ThemeProvider }       from '@atls-ui-admin/theme/provider'

import { DropzonePlaceholder } from './index.js'
import { Upload }              from './index.js'

const ToggleTheme: FC = (props) => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      style={{ width: 'fit-content' }}
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
      <MockedProvider mocks={[]} addTypename={false}>
        <Upload
          placeholder={
            <DropzonePlaceholder accept={['.SVG', '.PNG', '.JPG']}>
              Нажмите, чтобы загрузить
            </DropzonePlaceholder>
          }
        >
          <div style={{ height: 200, width: '100%' }} />
        </Upload>
      </MockedProvider>
    </ThemeProvider>
  ),
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const BaseUpload: Story = {
  name: 'Базовый',
}
