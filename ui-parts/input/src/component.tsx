'use client'

import type { PointerEventHandler } from 'react'
import type { ReactNode }           from 'react'

import type { InputProps }          from './interfaces.js'

import { clsx }                     from 'clsx'
import { useCallback }              from 'react'
import { useId }                    from 'react'
import { useRef }                   from 'react'

import { useTheme }                 from '@atls-ui-parts/theme'

import { Addons }                   from './addons/index.js'
import { appearanceStyles }         from './styles/index.js'
import { assignInputVariables }     from './styles/index.js'
import { containerStyles }          from './styles/index.js'
import { fieldStyles }              from './styles/index.js'
import { inputAppearances }         from './styles/index.js'
import { inputShapes }              from './styles/index.js'
import { inputStyles }              from './styles/index.js'
import { messageStyles }            from './styles/index.js'
import { resolveInputAppearance }   from './styles/index.js'

const isPresent = (value: ReactNode): boolean =>
  value !== undefined && value !== null && value !== false

export const Input = ({
  appearance = inputAppearances.primary,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  className,
  disabled,
  error,
  helperText,
  inputClassName,
  inputStyle,
  leadingAddon,
  placeholder = '',
  ref,
  shape = inputShapes.md,
  style,
  trailingAddon,
  type = 'text',
  ...props
}: InputProps): ReactNode => {
  const theme = useTheme()
  const inputRef = useRef<HTMLInputElement>(null)
  const generatedDescriptionId = useId()
  const resolvedAppearance = resolveInputAppearance(appearance, theme)
  const hasError = isPresent(error)
  const message = hasError ? error : helperText
  const hasMessage = isPresent(message)
  const descriptionId = hasMessage ? generatedDescriptionId : undefined
  const describedBy = [ariaDescribedBy, descriptionId].filter(Boolean).join(' ') || undefined
  const setInputRef = useCallback(
    (node: HTMLInputElement | null): void => {
      inputRef.current = node

      if (typeof ref === 'function') {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    },
    [ref]
  )
  const focusInput: PointerEventHandler<HTMLDivElement> = (event) => {
    if (event.button !== 0 || !(event.target instanceof Element)) {
      return
    }

    if (event.target.closest('button, a, input, select, textarea')) {
      return
    }

    event.preventDefault()
    inputRef.current?.focus()
  }

  return (
    <div
      className={clsx(containerStyles, className)}
      style={assignInputVariables(resolvedAppearance, shape, theme, style)}
    >
      <div
        className={clsx(fieldStyles, appearanceStyles, shape)}
        data-disabled={disabled || undefined}
        data-error={hasError || undefined}
        onPointerDown={focusInput}
      >
        <Addons position='leading'>{leadingAddon}</Addons>
        <input
          {...props}
          ref={setInputRef}
          aria-describedby={describedBy}
          aria-invalid={hasError ? true : ariaInvalid}
          className={clsx(inputStyles, inputClassName)}
          disabled={disabled}
          placeholder={placeholder}
          style={inputStyle}
          type={type}
        />
        <Addons position='trailing'>{trailingAddon}</Addons>
      </div>
      {hasMessage && (
        <div
          id={descriptionId}
          className={messageStyles}
          style={{
            color: hasError
              ? resolvedAppearance.error.content
              : resolvedAppearance.unfilled.content,
          }}
        >
          {message}
        </div>
      )}
    </div>
  )
}
