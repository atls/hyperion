import type { ButtonProps }              from '@atls-ui-admin/button'
import type { Meta }                     from '@storybook/react'
import type { StoryObj }                 from '@storybook/react'
import type { ReactNode }                from 'react'

import { useTheme }                      from 'next-themes'

import { Button }                        from '@atls-ui-admin/button'
import { ThemeProvider }                 from '@atls-ui-admin/theme'
import { buttonAppearances }             from '@atls-ui-admin/button'
import { buttonShapes }                  from '@atls-ui-admin/button'

import { DropzonePlaceholder }           from '../src/index.js'
import { Upload }                        from '../src/index.js'
import { customPlaceholderAcceptStyles } from './styles.css.js'
import { customPlaceholderIconStyles }   from './styles.css.js'
import { customPlaceholderLinkStyles }   from './styles.css.js'
import { customPlaceholderRootStyles }   from './styles.css.js'

type ButtonAppearanceName = keyof typeof buttonAppearances
type ButtonShapeName = keyof typeof buttonShapes

interface UploadStoryProps {
  appearance: ButtonAppearanceName
  customPlaceholder: boolean
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

const renderPlaceholder = (customPlaceholder: boolean): ReactNode => (
  <DropzonePlaceholder
    accept={['.SVG', '.PNG', '.JPG']}
    className={customPlaceholder ? customPlaceholderRootStyles : undefined}
    slotProps={
      customPlaceholder
        ? {
            icon: { className: customPlaceholderIconStyles },
            accept: { className: customPlaceholderAcceptStyles },
            link: { className: customPlaceholderLinkStyles },
          }
        : undefined
    }
  >
    Нажмите, чтобы загрузить
  </DropzonePlaceholder>
)

const meta: Meta<UploadStoryProps> = {
  title: 'Admin/Upload',
  render: ({ appearance, customPlaceholder, shape }) => (
    <ThemeProvider>
      <ToggleTheme appearance={buttonAppearances[appearance]} shape={buttonShapes[shape]} />
      <Upload placeholder={renderPlaceholder(customPlaceholder)}>
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
    customPlaceholder: {
      control: { type: 'boolean' },
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
    customPlaceholder: false,
    shape: 'huge',
  },
}
