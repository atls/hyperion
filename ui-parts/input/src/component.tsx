'use client'

import type { ReactNode }         from 'react'

import type { InputProps }        from './interfaces.js'

import { clsx }                   from 'clsx'
import { useId }                  from 'react'

import { useTheme }               from '@atls-ui-parts/theme'

import { Addon }                  from './addons/index.js'
import { appearanceStyles }       from './styles/index.js'
import { assignInputVariables }   from './styles/index.js'
import { containerStyles }        from './styles/index.js'
import { fieldStyles }            from './styles/index.js'
import { inputAppearances }       from './styles/index.js'
import { inputShapes }            from './styles/index.js'
import { inputStyles }            from './styles/index.js'
import { messageStyles }          from './styles/index.js'
import { resolveInputAppearance } from './styles/index.js'

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
  leadingAddon,
  ref,
  shape = inputShapes.md,
  style,
  trailingAddon,
  type = 'text',
  ...props
}: InputProps): ReactNode => {
  const theme = useTheme()
  const generatedDescriptionId = useId()
  const resolvedAppearance = resolveInputAppearance(appearance, theme)
  const hasError = isPresent(error)
  const message = hasError ? error : helperText
  const hasMessage = isPresent(message)
  const descriptionId = hasMessage ? generatedDescriptionId : undefined
  const describedBy = [ariaDescribedBy, descriptionId].filter(Boolean).join(' ') || undefined

  return (
    <div className={containerStyles}>
      <div
        className={clsx(fieldStyles, appearanceStyles, shape, className)}
        data-disabled={disabled || undefined}
        data-error={hasError || undefined}
        style={assignInputVariables(resolvedAppearance, shape, theme, style)}
      >
        <Addon position='leading'>{leadingAddon}</Addon>
        <input
          {...props}
          ref={ref}
          aria-describedby={describedBy}
          aria-invalid={hasError ? true : ariaInvalid}
          className={inputStyles}
          disabled={disabled}
          type={type}
        />
        <Addon position='trailing'>{trailingAddon}</Addon>
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
