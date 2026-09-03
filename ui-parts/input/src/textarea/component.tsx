'use client'

import type { PointerEventHandler } from 'react'
import type { ReactNode }           from 'react'

import type { TextareaProps }       from './interfaces.js'

import { clsx }                     from 'clsx'
import { useId }                    from 'react'
import { useImperativeHandle }      from 'react'
import { useRef }                   from 'react'

import { useTheme }                 from '@atls-ui-parts/theme'

import { appearanceStyles }         from '../styles/index.js'
import { assignInputVariables }     from '../styles/index.js'
import { containerStyles }          from '../styles/index.js'
import { fieldStyles }              from '../styles/index.js'
import { inputAppearances }         from '../styles/index.js'
import { inputShapes }              from '../styles/index.js'
import { inputStyles }              from '../styles/index.js'
import { messageStyles }            from '../styles/index.js'
import { resolveInputAppearance }   from '../styles/index.js'

const isPresent = (value: ReactNode): boolean =>
  value !== undefined && value !== null && value !== false

export const Textarea = ({
  appearance = inputAppearances.primary,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  className,
  disabled,
  error,
  helperText,
  hidden,
  placeholder = '',
  ref,
  shape = inputShapes.md,
  style,
  textareaClassName,
  textareaStyle,
  ...props
}: TextareaProps): ReactNode => {
  const theme = useTheme()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const generatedDescriptionId = useId()
  const resolvedAppearance = resolveInputAppearance(appearance, theme, shape)
  const hasError = isPresent(error)
  const message = hasError ? error : helperText
  const hasMessage = isPresent(message)
  const descriptionId = hasMessage ? generatedDescriptionId : undefined
  const describedBy = [ariaDescribedBy, descriptionId].filter(Boolean).join(' ') || undefined

  useImperativeHandle(ref, () => textareaRef.current!, [])

  const focusTextarea: PointerEventHandler<HTMLDivElement> = (event) => {
    if (event.button !== 0 || !(event.target instanceof Element)) {
      return
    }

    if (event.target.closest('button, a, input, select, textarea')) {
      return
    }

    event.preventDefault()
    textareaRef.current?.focus()
  }

  return (
    <div
      className={clsx(containerStyles, className)}
      hidden={hidden}
      style={assignInputVariables(resolvedAppearance, style)}
    >
      <div
        className={clsx(fieldStyles, appearanceStyles, shape.className)}
        data-disabled={disabled || undefined}
        data-error={hasError || undefined}
        onPointerDown={focusTextarea}
      >
        <textarea
          {...props}
          ref={textareaRef}
          aria-describedby={describedBy}
          aria-invalid={hasError ? true : ariaInvalid}
          className={clsx(inputStyles, textareaClassName)}
          disabled={disabled}
          placeholder={placeholder}
          style={textareaStyle}
        />
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
