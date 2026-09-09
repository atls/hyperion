import type { Meta }             from '@storybook/react'
import type { StoryObj }         from '@storybook/react'

import type { SwitchStoryProps } from './interfaces.js'

import { useEffect }             from 'react'
import { useState }              from 'react'

import { ThemeProvider }         from '@atls-ui-parts/theme'
import { darkTheme }             from '@atls-ui/theme'
import { lightTheme }            from '@atls-ui/theme'

import { Switch }                from '../src/component.js'
import { switchShapes }          from '../src/styles/shape/variants.css.js'
import { shapeLabels }           from './constants.js'
import { shapes }                from './constants.js'
import { containerStyles }       from './styles.css.js'
import { customThumbStyles }     from './styles.css.js'
import { focusedStyles }         from './styles.css.js'
import { rowStyles }             from './styles.css.js'
import { shapeLabelStyles }      from './styles.css.js'

const SwitchExample = ({ checked, customThumb, disabled, focused, theme }: SwitchStoryProps) => {
  const [value, setValue] = useState(checked)
  const selectedTheme = theme === 'dark' ? darkTheme : lightTheme

  useEffect(() => {
    setValue(checked)
  }, [checked])

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
        {shapes.map((shape) => (
          <div key={shape} className={rowStyles}>
            <span
              className={shapeLabelStyles}
              style={{ color: selectedTheme.colors.text.secondary }}
            >
              {shapeLabels[shape]}
            </span>
            <Switch
              aria-label={`Switch ${shapeLabels[shape]}`}
              checked={value}
              className={focused ? focusedStyles : undefined}
              disabled={disabled}
              shape={switchShapes[shape]}
              thumb={customThumb ? <span className={customThumbStyles} /> : undefined}
              onChange={setValue}
            />
          </div>
        ))}
      </div>
    </ThemeProvider>
  )
}

const meta: Meta<SwitchStoryProps> = {
  title: 'Components/Switch',
  render: (props) => <SwitchExample {...props} />,
  tags: ['autodocs'],
  argTypes: {
    customThumb: {
      description: 'Показать пользовательский thumb',
      control: { type: 'boolean' },
    },
    focused: {
      description: 'Принудительно показать focused-состояние',
      control: { type: 'boolean' },
    },
    theme: {
      description: 'Тема',
      control: { type: 'inline-radio' },
      options: ['light', 'dark'],
    },
  },
}

export default meta

type Story = StoryObj<SwitchStoryProps>

export const Variants: Story = {
  args: {
    checked: false,
    customThumb: false,
    disabled: false,
    focused: false,
    theme: 'light',
  },
}
