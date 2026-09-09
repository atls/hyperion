import type { Meta }               from '@storybook/react'
import type { StoryObj }           from '@storybook/react'

import type { TextareaStoryProps } from './interfaces.js'

import { ThemeProvider }           from '@atls-ui-parts/theme'
import { darkTheme }               from '@atls-ui/theme'
import { lightTheme }              from '@atls-ui/theme'

import { Textarea }                from '../src/textarea/index.js'
import { inputAppearances }        from '../src/styles/appearance/variants.js'
import { inputShapes }             from '../src/styles/shape/variants.css.js'
import { appearances }             from './constants.js'
import { shapes }                  from './constants.js'
import { containerStyles }         from './styles.css.js'
import { inputStyles }             from './styles.css.js'
import { previewStyles }           from './styles.css.js'

const TextareaExample = ({
  appearance,
  disabled,
  error,
  helperText,
  placeholder,
  rows,
  shape,
  theme,
}: TextareaStoryProps) => {
  const selectedTheme = theme === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={selectedTheme}>
      <div
        className={containerStyles}
        style={{
          background: selectedTheme.colors.surface.base,
          color: selectedTheme.colors.text.primary,
          fontFamily: selectedTheme.typography.fontFamily,
        }}
      >
        <div className={previewStyles}>
          <Textarea
            aria-label='Textarea'
            appearance={inputAppearances[appearance]}
            className={inputStyles}
            disabled={disabled}
            error={error ? 'Invalid value' : undefined}
            helperText={helperText ? 'Helper text' : undefined}
            placeholder={placeholder}
            rows={rows}
            shape={inputShapes[shape]}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

const meta: Meta<TextareaStoryProps> = {
  title: 'Components/Textarea',
  render: (props) => <TextareaExample {...props} />,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'inline-radio' },
      options: appearances,
    },
    error: {
      description: 'Показать error-состояние и сообщение',
      control: { type: 'boolean' },
    },
    helperText: {
      description: 'Показать вспомогательный текст',
      control: { type: 'boolean' },
    },
    rows: {
      description: 'Количество видимых строк',
      control: { type: 'number', min: 2, max: 12, step: 1 },
    },
    shape: {
      description: 'Shape',
      control: { type: 'inline-radio' },
      options: shapes,
    },
    theme: {
      description: 'Тема',
      control: { type: 'inline-radio' },
      options: ['light', 'dark'],
    },
  },
}

export default meta

type Story = StoryObj<TextareaStoryProps>

export const Variants: Story = {
  args: {
    appearance: 'primary',
    disabled: false,
    error: false,
    helperText: false,
    placeholder: 'Placeholder',
    rows: 4,
    shape: 'md',
    theme: 'light',
  },
}
