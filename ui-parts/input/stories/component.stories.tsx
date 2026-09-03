import type { Meta }               from '@storybook/react'
import type { StoryObj }           from '@storybook/react'
import type { ChangeEventHandler } from 'react'
import type { ReactNode }          from 'react'

import type { InputStoryProps }    from './interfaces.js'

import { isValidPhoneNumber }      from 'libphonenumber-js'
import { useRef }                  from 'react'
import { useState }                from 'react'
import { expect }                  from 'storybook/test'
import { fn }                      from 'storybook/test'
import { userEvent }               from 'storybook/test'
import { within }                  from 'storybook/test'

import { EmailIcon }               from '@atls-ui-parts/icons'
import { SearchIcon }              from '@atls-ui-parts/icons'
import { ThemeProvider }           from '@atls-ui-parts/theme'
import { darkTheme }               from '@atls-ui/theme'
import { lightTheme }              from '@atls-ui/theme'

import { Input }                   from '../src/component.js'
import { ClearableInput }          from '../src/typed/index.js'
import { EmailInput }              from '../src/typed/index.js'
import { PasswordInput }           from '../src/typed/index.js'
import { PhoneInput }              from '../src/typed/index.js'
import { SearchInput }             from '../src/typed/index.js'
import { inputAppearances }        from '../src/styles/appearance/variants.js'
import { inputShapes }             from '../src/styles/shape/variants.css.js'
import { appearances }             from './constants.js'
import { shapes }                  from './constants.js'
import { containerStyles }         from './styles.css.js'
import { inputStyles }             from './styles.css.js'
import { previewStyles }           from './styles.css.js'

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
        <div className={previewStyles}>{children}</div>
      </div>
    </ThemeProvider>
  )
}

const getAppearance = (appearance: InputStoryProps['appearance']) => inputAppearances[appearance]

const getShape = (shape: InputStoryProps['shape']) => inputShapes[shape]

const getError = (error: boolean, message = 'Invalid value'): string | undefined =>
  error ? message : undefined

const getHelperText = (helperText: boolean): string | undefined =>
  helperText ? 'Helper text' : undefined

const InputExample = ({
  appearance,
  disabled,
  error,
  helperText,
  leadingAddon,
  placeholder,
  shape,
  theme,
  trailingAddon,
}: InputStoryProps) => (
  <Frame theme={theme}>
    <Input
      aria-label='Input'
      appearance={getAppearance(appearance)}
      className={inputStyles}
      disabled={disabled}
      error={getError(error)}
      helperText={getHelperText(helperText)}
      leadingAddon={leadingAddon ? <SearchIcon /> : undefined}
      placeholder={placeholder}
      shape={getShape(shape)}
      trailingAddon={trailingAddon ? <EmailIcon /> : undefined}
    />
  </Frame>
)

const SearchExample = ({
  appearance,
  disabled,
  error,
  helperText,
  placeholder,
  shape,
  theme,
}: InputStoryProps) => (
  <Frame theme={theme}>
    <SearchInput
      aria-label='Search'
      appearance={getAppearance(appearance)}
      className={inputStyles}
      disabled={disabled}
      error={getError(error)}
      helperText={getHelperText(helperText)}
      placeholder={placeholder}
      shape={getShape(shape)}
    />
  </Frame>
)

const ClearableExample = ({
  appearance,
  disabled,
  error,
  helperText,
  placeholder,
  shape,
  theme,
}: InputStoryProps) => {
  const [value, setValue] = useState('Clear me')
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.value)
  }

  return (
    <Frame theme={theme}>
      <ClearableInput
        aria-label='Clearable input'
        appearance={getAppearance(appearance)}
        className={inputStyles}
        disabled={disabled}
        error={getError(error)}
        helperText={getHelperText(helperText)}
        placeholder={placeholder}
        shape={getShape(shape)}
        value={value}
        onChange={handleChange}
      />
    </Frame>
  )
}

const readOnlyCallbacks = {
  onChange: fn(),
  onClear: fn(),
  onValueChange: fn(),
}

const ReadOnlyClearableExample = ({
  appearance,
  error,
  helperText,
  placeholder,
  shape,
  theme,
}: InputStoryProps) => (
  <Frame theme={theme}>
    <ClearableInput
      readOnly
      aria-label='Read-only clearable input'
      appearance={getAppearance(appearance)}
      className={inputStyles}
      defaultValue='Read only value'
      error={getError(error)}
      helperText={getHelperText(helperText)}
      placeholder={placeholder}
      shape={getShape(shape)}
      onChange={readOnlyCallbacks.onChange}
      onClear={readOnlyCallbacks.onClear}
      onValueChange={readOnlyCallbacks.onValueChange}
    />
  </Frame>
)

const FormResetExample = ({
  appearance,
  error,
  helperText,
  placeholder,
  shape,
  theme,
}: InputStoryProps) => {
  const formAId = 'form-a'
  const formBId = 'form-b'
  const formBRef = useRef<HTMLFormElement | null>(null)
  const detachedFormBRef = useRef<HTMLFormElement | null>(null)
  const [form, setForm] = useState(formAId)
  const [formBVersion, setFormBVersion] = useState(0)

  const remountFormB = (): void => {
    detachedFormBRef.current = formBRef.current
    setFormBVersion((currentVersion) => currentVersion + 1)
  }

  return (
    <Frame theme={theme}>
      <form id={formAId} />
      <form key={formBVersion} ref={formBRef} id={formBId} />
      <ClearableInput
        aria-label='Form-associated input'
        appearance={getAppearance(appearance)}
        className={inputStyles}
        defaultValue='Default value'
        error={getError(error)}
        form={form}
        helperText={getHelperText(helperText)}
        name='form-associated-input'
        placeholder={placeholder}
        shape={getShape(shape)}
      />
      <button
        type='button'
        onClick={() => {
          setForm(formBId)
        }}
      >
        Associate with form B
      </button>
      <button type='button' onClick={remountFormB}>
        Remount form B
      </button>
      <button
        type='button'
        onClick={() => {
          detachedFormBRef.current?.reset()
        }}
      >
        Reset detached form B
      </button>
      <input type='reset' form={formAId} value='Reset form A' />
      <input type='reset' form={formBId} value='Reset form B' />
    </Frame>
  )
}

const PasswordExample = ({
  appearance,
  disabled,
  error,
  helperText,
  placeholder,
  shape,
  theme,
}: InputStoryProps) => (
  <Frame theme={theme}>
    <PasswordInput
      aria-label='Password'
      appearance={getAppearance(appearance)}
      className={inputStyles}
      defaultValue='password'
      disabled={disabled}
      error={getError(error)}
      helperText={getHelperText(helperText)}
      placeholder={placeholder}
      shape={getShape(shape)}
    />
  </Frame>
)

const PhoneExample = ({
  appearance,
  disabled,
  error,
  helperText,
  placeholder,
  shape,
  theme,
}: InputStoryProps) => {
  const [value, setValue] = useState('+7 123')
  const validationError =
    value && !isValidPhoneNumber(value) ? 'Enter a valid phone number' : undefined

  return (
    <Frame theme={theme}>
      <PhoneInput
        aria-label='Phone'
        appearance={getAppearance(appearance)}
        className={inputStyles}
        disabled={disabled}
        error={getError(error) ?? validationError}
        helperText={getHelperText(helperText)}
        placeholder={placeholder}
        shape={getShape(shape)}
        value={value}
        onValueChange={setValue}
      />
    </Frame>
  )
}

const EmailExample = ({
  appearance,
  disabled,
  error,
  helperText,
  placeholder,
  shape,
  theme,
}: InputStoryProps) => {
  const [value, setValue] = useState('invalid-email')
  const [invalid, setInvalid] = useState(true)
  const validate: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInvalid(!event.currentTarget.validity.valid)
  }

  return (
    <Frame theme={theme}>
      <EmailInput
        aria-label='Email'
        appearance={getAppearance(appearance)}
        className={inputStyles}
        disabled={disabled}
        error={getError(error) ?? (invalid ? 'Enter a valid email address' : undefined)}
        helperText={getHelperText(helperText)}
        placeholder={placeholder}
        shape={getShape(shape)}
        value={value}
        onChange={validate}
        onValueChange={setValue}
      />
    </Frame>
  )
}

const meta: Meta<InputStoryProps> = {
  title: 'Components/Input',
  render: (props) => <InputExample {...props} />,
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
    leadingAddon: {
      description: 'Показать leading addon',
      control: { type: 'boolean' },
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
    trailingAddon: {
      description: 'Показать trailing addon',
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<InputStoryProps>

const defaultArgs: InputStoryProps = {
  appearance: 'primary',
  disabled: false,
  error: false,
  helperText: false,
  leadingAddon: false,
  placeholder: 'Placeholder',
  shape: 'md',
  theme: 'light',
  trailingAddon: false,
}

const typedArgTypes = {
  leadingAddon: {
    table: { disable: true },
  },
  trailingAddon: {
    table: { disable: true },
  },
} as const

export const Variants: Story = {
  args: defaultArgs,
}

export const Search: Story = {
  argTypes: typedArgTypes,
  args: {
    ...defaultArgs,
    placeholder: 'Search',
  },
  render: (props) => <SearchExample {...props} />,
}

export const Clearable: Story = {
  argTypes: typedArgTypes,
  args: {
    ...defaultArgs,
    placeholder: 'Start typing',
  },
  render: (props) => <ClearableExample {...props} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox', { name: 'Clearable input' })

    await userEvent.click(canvas.getByRole('button', { name: 'Clear input' }))

    await expect(input).toHaveValue('')
  },
}

export const ReadOnlyClearable: Story = {
  argTypes: typedArgTypes,
  args: {
    ...defaultArgs,
    placeholder: 'Read-only value',
  },
  render: (props) => <ReadOnlyClearableExample {...props} />,
  play: async ({ canvasElement }) => {
    readOnlyCallbacks.onChange.mockClear()
    readOnlyCallbacks.onClear.mockClear()
    readOnlyCallbacks.onValueChange.mockClear()

    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox', { name: 'Read-only clearable input' })
    const clearButton = canvas.getByRole('button', { name: 'Clear input' })

    await expect(input).toHaveAttribute('readonly')
    await expect(input).not.toBeDisabled()
    await expect(clearButton).toBeDisabled()

    await userEvent.click(clearButton)
    await userEvent.click(input)
    await userEvent.keyboard('{Enter} ')

    await expect(input).toHaveValue('Read only value')
    await expect(readOnlyCallbacks.onChange).not.toHaveBeenCalled()
    await expect(readOnlyCallbacks.onClear).not.toHaveBeenCalled()
    await expect(readOnlyCallbacks.onValueChange).not.toHaveBeenCalled()
  },
}

export const FormReset: Story = {
  argTypes: typedArgTypes,
  args: {
    ...defaultArgs,
    placeholder: 'Form-associated value',
  },
  render: (props) => <FormResetExample {...props} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole<HTMLInputElement>('textbox', {
      name: 'Form-associated input',
    })

    await userEvent.clear(input)
    await userEvent.type(input, 'Edited value')
    await userEvent.click(canvas.getByRole('button', { name: 'Associate with form B' }))

    await expect(input).toHaveAttribute('form', 'form-b')

    await userEvent.click(canvas.getByRole('button', { name: 'Reset form A' }))

    await expect(input).toHaveValue('Edited value')

    const formB = canvasElement.querySelector<HTMLFormElement>('#form-b')

    if (!formB) {
      throw new Error('Form B is not available')
    }

    formB.reset()

    const valueAfterReset = input.value
    const formDataAfterReset = new FormData(formB).get('form-associated-input')

    await expect(valueAfterReset).toBe('Default value')
    await expect(formDataAfterReset).toBe('Default value')
    await expect(input).toHaveValue('Default value')

    await userEvent.clear(input)
    await userEvent.type(input, 'Canceled reset')

    formB.addEventListener(
      'reset',
      (event) => {
        event.preventDefault()
      },
      { once: true }
    )
    formB.reset()

    const valueAfterCanceledReset = input.value
    const formDataAfterCanceledReset = new FormData(formB).get('form-associated-input')

    await expect(valueAfterCanceledReset).toBe('Canceled reset')
    await expect(formDataAfterCanceledReset).toBe('Canceled reset')

    await Promise.resolve()

    await expect(input).toHaveValue('Canceled reset')

    await userEvent.clear(input)
    await userEvent.type(input, 'Edited after remount')
    await userEvent.click(canvas.getByRole('button', { name: 'Remount form B' }))

    await expect(input).toHaveAttribute('form', 'form-b')

    await userEvent.click(canvas.getByRole('button', { name: 'Reset detached form B' }))

    await expect(input).toHaveValue('Edited after remount')

    await userEvent.click(canvas.getByRole('button', { name: 'Reset form B' }))

    await expect(input).toHaveValue('Default value')
  },
}

export const Password: Story = {
  argTypes: typedArgTypes,
  args: {
    ...defaultArgs,
    placeholder: 'Enter password',
  },
  render: (props) => <PasswordExample {...props} />,
}

export const Phone: Story = {
  argTypes: typedArgTypes,
  args: {
    ...defaultArgs,
    placeholder: '+7 (999) 999 99-99',
  },
  render: (props) => <PhoneExample {...props} />,
}

export const Email: Story = {
  argTypes: typedArgTypes,
  args: {
    ...defaultArgs,
    placeholder: 'Enter email',
  },
  render: (props) => <EmailExample {...props} />,
}
