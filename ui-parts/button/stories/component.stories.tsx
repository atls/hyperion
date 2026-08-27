import type { Meta }             from '@storybook/react'
import type { StoryObj }         from '@storybook/react'

import type { ButtonStoryProps } from './interfaces.js'

import { ThemeProvider }         from '@atls-ui-parts/theme'
import { darkTheme }             from '@atls-ui/theme'
import { lightTheme }            from '@atls-ui/theme'

import { Button }                from '../src/component.js'
import { buttonAppearances }     from '../src/styles/appearance/variants.js'
import { buttonShapes }          from '../src/styles/shape/variants.js'
import { appearanceLabels }      from './constants.js'
import { appearances }           from './constants.js'
import { shapeLabels }           from './constants.js'
import { shapes }                from './constants.js'
import { appearanceStyles }      from './styles.css.js'
import { buttonContainerStyles } from './styles.css.js'
import { containerStyles }       from './styles.css.js'
import { focusedStyles }         from './styles.css.js'
import { rowStyles }             from './styles.css.js'
import { shapeLabelStyles }      from './styles.css.js'
import { titleStyles }           from './styles.css.js'

const Addon = () => (
  <svg aria-hidden viewBox='0 0 24 24'>
    <path
      fill='currentColor'
      d='M12 2a3 3 0 0 1 3 3v3.17l2.74-1.59a3 3 0 1 1 3 5.2L18 13.36l2.74 1.58a3 3 0 1 1-3 5.2L15 18.55V21a3 3 0 1 1-6 0v-2.45l-2.74 1.59a3 3 0 1 1-3-5.2L6 13.36l-2.74-1.58a3 3 0 1 1 3-5.2L9 8.17V5a3 3 0 0 1 3-3Z'
    />
  </svg>
)

const ButtonExample = ({
  children,
  disabled,
  focused,
  fullWidth,
  leadingAddon,
  theme,
  trailingAddon,
}: ButtonStoryProps) => {
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
        {appearances.map((appearance) => (
          <section key={appearance} className={appearanceStyles}>
            <h2 className={titleStyles}>{appearanceLabels[appearance]}</h2>
            {shapes.map((shape) => (
              <div key={shape} className={rowStyles}>
                <span
                  className={shapeLabelStyles}
                  style={{ color: selectedTheme.colors.text.secondary }}
                >
                  {shapeLabels[shape]}
                </span>
                <div className={buttonContainerStyles}>
                  <Button
                    appearance={buttonAppearances[appearance]}
                    className={focused ? focusedStyles : undefined}
                    disabled={disabled}
                    fullWidth={fullWidth}
                    leadingAddon={leadingAddon ? <Addon /> : undefined}
                    shape={buttonShapes[shape]}
                    trailingAddon={trailingAddon ? <Addon /> : undefined}
                  >
                    {children}
                  </Button>
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </ThemeProvider>
  )
}

const meta: Meta<ButtonStoryProps> = {
  title: 'Components/Button',
  render: (props) => <ButtonExample {...props} />,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Контент',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    focused: {
      description: 'Принудительно показать focused-состояние',
      control: { type: 'boolean' },
    },
    leadingAddon: {
      description: 'Показать leading addon',
      control: { type: 'boolean' },
    },
    theme: {
      description: 'Тема',
      control: { type: 'inline-radio' },
      options: ['light', 'dark'],
    },
    trailingAddon: {
      description: 'Показать trailing addon',
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<ButtonStoryProps>

export const Variants: Story = {
  args: {
    children: 'Button',
    disabled: false,
    focused: false,
    fullWidth: false,
    leadingAddon: false,
    theme: 'light',
    trailingAddon: false,
  },
}

export const FullWidth: Story = {
  args: {
    ...Variants.args,
    fullWidth: true,
    leadingAddon: true,
  },
}
