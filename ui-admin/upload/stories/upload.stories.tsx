import type { ButtonProps }      from '@atls-ui-admin/button'
import type { Meta }             from '@storybook/react'
import type { StoryObj }         from '@storybook/react'
import type { ReactElement }     from 'react'
import type { ReactNode }        from 'react'

import type { UploadStoryProps } from './interfaces.js'

import { useTheme }              from 'next-themes'

import { Button }                from '@atls-ui-admin/button'
import { ThemeProvider }         from '@atls-ui-admin/theme'
import { buttonAppearances }     from '@atls-ui-admin/button'
import { buttonShapes }          from '@atls-ui-admin/button'

import { DropzonePlaceholder }   from '../src/index.js'
import { Upload }                from '../src/index.js'
import { customPlaceholderAcceptStyles } from './styles.css.js'

import { customPlaceholderIconStyles } from './styles.css.js'

import { customPlaceholderLinkStyles } from './styles.css.js'

import { customPlaceholderRootStyles } from './styles.css.js'

import { toggleThemeStyles } from './styles.css.js'

import { uploadAreaStyles } from './styles.css.js'

const ToggleTheme = (props: ButtonProps): ReactElement => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      className={toggleThemeStyles}
      onClick={(): void => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
      {...props}
    >
      Toggle Theme: {theme}
    </Button>
  )
}

const basePlaceholder = (
  <DropzonePlaceholder accept={['.SVG', '.PNG', '.JPG']}>
    Нажмите, чтобы загрузить
  </DropzonePlaceholder>
)

const customPlaceholder = (
  <DropzonePlaceholder
    accept={['.SVG', '.PNG', '.JPG']}
    className={customPlaceholderRootStyles}
    slotProps={{
      icon: { className: customPlaceholderIconStyles },
      accept: { className: customPlaceholderAcceptStyles },
      link: { className: customPlaceholderLinkStyles },
    }}
  >
    Нажмите, чтобы загрузить
  </DropzonePlaceholder>
)

const renderUploadStory = (
  { appearance, shape }: UploadStoryProps,
  placeholder: ReactNode = basePlaceholder
): ReactElement => (
  <ThemeProvider>
    <ToggleTheme appearance={buttonAppearances[appearance]} shape={buttonShapes[shape]} />
    <Upload placeholder={placeholder}>
      <div className={uploadAreaStyles} />
    </Upload>
  </ThemeProvider>
)

const meta: Meta<UploadStoryProps> = {
  title: 'Admin/Upload',
  render: (props): ReactElement => renderUploadStory(props),
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

export const CustomPlaceholder: Story = {
  name: 'Кастомный placeholder',
  render: (props): ReactElement => renderUploadStory(props, customPlaceholder),
  args: {
    appearance: 'blue',
    shape: 'huge',
  },
}
