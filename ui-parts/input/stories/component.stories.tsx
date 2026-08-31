import type { Meta }                from '@storybook/react'
import type { StoryObj }            from '@storybook/react'
import type { ReactNode }           from 'react'

import type { InputStoryProps }     from './interfaces.js'

import { useState }                 from 'react'

import { CrossIcon }                from '@atls-ui-parts/icons'
import { SearchIcon }               from '@atls-ui-parts/icons'
import { ThemeProvider }            from '@atls-ui-parts/theme'
import { darkTheme }                from '@atls-ui/theme'
import { lightTheme }               from '@atls-ui/theme'

import { Input }                    from '../src/component.js'
import { ClearableInput }           from '../src/typed/index.js'
import { EmailInput }               from '../src/typed/index.js'
import { PasswordInput }            from '../src/typed/index.js'
import { PhoneInput }               from '../src/typed/index.js'
import { SearchInput }              from '../src/typed/index.js'
import { inputAppearances }         from '../src/styles/appearance/variants.js'
import { inputShapes }              from '../src/styles/shape/variants.css.js'
import { appearanceLabels }         from './constants.js'
import { appearances }              from './constants.js'
import { shapeLabels }              from './constants.js'
import { shapes }                   from './constants.js'
import { appearanceStyles }         from './styles.css.js'
import { containerStyles }          from './styles.css.js'
import { exampleStyles }            from './styles.css.js'
import { labelStyles }              from './styles.css.js'
import { rowStyles }                from './styles.css.js'
import { stateGridStyles }          from './styles.css.js'
import { titleStyles }              from './styles.css.js'
import { typedCellStyles }          from './styles.css.js'
import { typedColumnStyles }        from './styles.css.js'
import { typedHeadingStyles }       from './styles.css.js'
import { typedInputStyles }         from './styles.css.js'
import { typedTableStyles }         from './styles.css.js'
import { typedTableViewportStyles } from './styles.css.js'

const TypedCell = ({ children }: { children?: ReactNode }) => (
  <div className={typedCellStyles}>{children}</div>
)

const TypedPasswordInput = (): ReactNode => {
  const [value, setValue] = useState('')
  const error = value === '11111111' ? 'Invalid password' : undefined

  return (
    <PasswordInput
      aria-label='Password'
      className={typedInputStyles}
      error={error}
      value={value}
      onValueChange={setValue}
    />
  )
}

const TypedClearableInput = (): ReactNode => {
  const [value, setValue] = useState('')

  return (
    <ClearableInput
      aria-label='Clearable'
      className={typedInputStyles}
      value={value}
      onValueChange={setValue}
    />
  )
}

const Frame = ({ children, theme }: { children: ReactNode; theme: InputStoryProps['theme'] }) => {
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
        {children}
      </div>
    </ThemeProvider>
  )
}

const VariantsExample = ({
  disabled,
  error,
  helperText,
  leadingAddon,
  placeholder,
  theme,
  trailingAddon,
  value,
}: InputStoryProps) => (
  <Frame theme={theme}>
    {appearances.map((appearance) => (
      <section key={appearance} className={appearanceStyles}>
        <h2 className={titleStyles}>{appearanceLabels[appearance]}</h2>
        {shapes.map((shape) => (
          <div key={shape} className={rowStyles}>
            <span className={labelStyles}>{shapeLabels[shape]}</span>
            <Input
              appearance={inputAppearances[appearance]}
              defaultValue={value}
              disabled={disabled}
              error={error ? 'Invalid value' : undefined}
              helperText={helperText ? 'Helper text' : undefined}
              leadingAddon={leadingAddon ? <SearchIcon /> : undefined}
              placeholder={placeholder}
              shape={inputShapes[shape]}
              trailingAddon={trailingAddon ? <CrossIcon /> : undefined}
            />
          </div>
        ))}
      </section>
    ))}
  </Frame>
)

const meta: Meta<InputStoryProps> = {
  title: 'Components/Input',
  render: (props) => <VariantsExample {...props} />,
  tags: ['autodocs'],
  argTypes: {
    error: {
      description: 'Показать error-состояние и сообщение',
      control: { type: 'boolean' },
    },
    helperText: {
      description: 'Показать вспомогательный текст',
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

type Story = StoryObj<InputStoryProps>

export const Variants: Story = {
  args: {
    disabled: false,
    error: false,
    helperText: false,
    leadingAddon: false,
    placeholder: 'Placeholder',
    theme: 'light',
    trailingAddon: false,
  },
}

export const Addons: Story = {
  args: {
    ...Variants.args,
    leadingAddon: true,
    trailingAddon: true,
    value: 'Input value',
  },
}

export const States: Story = {
  args: {
    ...Variants.args,
  },
  render: ({ theme }) => (
    <Frame theme={theme}>
      <div className={stateGridStyles}>
        <div className={exampleStyles}>
          <span>Unfilled</span>
          <Input placeholder='Email' />
        </div>
        <div className={exampleStyles}>
          <span>Unfilled without placeholder</span>
          <Input aria-label='Empty input' />
        </div>
        <div className={exampleStyles}>
          <span>Filled</span>
          <Input defaultValue='mail@example.com' placeholder='Email' />
        </div>
        <div className={exampleStyles}>
          <span>Hover — наведите</span>
          <Input placeholder='Hover me' />
        </div>
        <div className={exampleStyles}>
          <span>Focused</span>
          <Input autoFocus defaultValue='Focused value' placeholder='Email' />
        </div>
        <div className={exampleStyles}>
          <span>Disabled</span>
          <Input
            disabled
            defaultValue='Disabled value'
            leadingAddon={<SearchIcon />}
            placeholder='Email'
            trailingAddon={<CrossIcon />}
          />
        </div>
        <div className={exampleStyles}>
          <span>Error</span>
          <Input
            error='Invalid email'
            defaultValue='mail@'
            leadingAddon={<SearchIcon />}
            placeholder='Email'
            trailingAddon={<CrossIcon />}
          />
        </div>
      </div>
    </Frame>
  ),
}

export const TypedInputs: Story = {
  args: {
    ...Variants.args,
  },
  render: ({ theme }) => (
    <Frame theme={theme}>
      <div className={typedTableViewportStyles}>
        <div className={typedTableStyles}>
          <section className={typedColumnStyles}>
            <strong className={typedHeadingStyles}>Search</strong>
            <TypedCell>
              <SearchInput aria-label='Search' className={typedInputStyles} />
            </TypedCell>
          </section>

          <section className={typedColumnStyles}>
            <strong className={typedHeadingStyles}>Clearable</strong>
            <TypedCell>
              <TypedClearableInput />
            </TypedCell>
          </section>

          <section className={typedColumnStyles}>
            <strong className={typedHeadingStyles}>Password</strong>
            <TypedCell>
              <TypedPasswordInput />
            </TypedCell>
          </section>

          <section className={typedColumnStyles}>
            <strong className={typedHeadingStyles}>Phone</strong>
            <TypedCell>
              <PhoneInput aria-label='Phone' className={typedInputStyles} />
            </TypedCell>
          </section>

          <section className={typedColumnStyles}>
            <strong className={typedHeadingStyles}>Email</strong>
            <TypedCell>
              <EmailInput aria-label='Email' className={typedInputStyles} />
            </TypedCell>
          </section>
        </div>
      </div>
    </Frame>
  ),
}
