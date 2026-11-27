'use client'

import type { ReactNode }                from 'react'

import type { AutocompleteProps }        from './interfaces.js'

import { clsx }                          from 'clsx'

import { ChevronDownIcon }               from '@atls-ui-parts/icons'
import { Input }                         from '@atls-ui-parts/input'
import { InputIndicator }                from '@atls-ui-parts/input'
import { Listbox }                       from '@atls-ui-parts/listbox'
import { Option }                        from '@atls-ui-parts/listbox'
import { useTheme }                      from '@atls-ui-parts/theme'

import { DEFAULT_PLACEHOLDER }           from './constants.js'
import { DEFAULT_LOADING_CONTENT }       from './constants.js'
import { DEFAULT_EMPTY_CONTENT }         from './constants.js'
import { DEFAULT_TOGGLE_LABEL }          from './constants.js'
import { Container }                     from './container/component.js'
import { Message }                       from './message/component.js'
import { Toggle }                        from './toggle/component.js'
import { autocompleteAnimations }        from './animation/variants.js'
import { resolveAutocompleteAppearance } from './styles/appearance/resolve.js'
import { toInputShape }                  from './styles/shape/input.js'
import { autocompleteShapes }            from './styles/shape/variants.js'
import { useAutocomplete }               from './useAutocomplete.js'
export const Autocomplete = ({
  options,
  value,
  defaultValue,
  onChange,
  inputValue,
  defaultInputValue,
  onInputChange,
  open,
  defaultOpen,
  onOpenChange,
  disabled = false,
  loading = false,
  filterOptions,
  shape = autocompleteShapes.md,
  appearance = 'default',
  animation = autocompleteAnimations.default,
  placeholder = DEFAULT_PLACEHOLDER,
  indicator = <ChevronDownIcon />,
  loadingContent = DEFAULT_LOADING_CONTENT,
  emptyContent = DEFAULT_EMPTY_CONTENT,
  renderOption,
  inputProps,
  toggleProps,
  menuProps,
  classNames,
  className,
  'aria-label': ariaLabel,
  ...props
}: AutocompleteProps): ReactNode => {
  const theme = useTheme()
  const resolvedAppearance = resolveAutocompleteAppearance(appearance, theme, shape)
  const behavior = useAutocomplete({
    options,
    value,
    defaultValue,
    onChange,
    inputValue,
    defaultInputValue,
    onInputChange,
    open,
    defaultOpen,
    onOpenChange,
    disabled,
    loading,
    filterOptions,
    shape,
    animation,
    inputProps,
    toggleProps,
    menuProps,
    'aria-label': ariaLabel,
  })
  const { className: inputClassName, style: inputStyle, ...nativeInputProps } = behavior.inputProps
  const statusContent = loading ? loadingContent : emptyContent
  const { statusWidth, ...menuShape } = shape.menu
  const status =
    behavior.options.length === 0 ? (
      <Message shape={shape.option} appearance={resolvedAppearance.message}>
        {statusContent}
      </Message>
    ) : undefined
  return (
    <Container {...props} className={clsx(classNames?.container, className)}>
      <Input
        {...nativeInputProps}
        fieldRef={behavior.referenceRef}
        type='text'
        appearance={resolvedAppearance.input}
        shape={toInputShape(shape.input)}
        animation={animation.input}
        disabled={disabled}
        placeholder={placeholder}
        inputClassName={clsx(classNames?.input, inputClassName)}
        inputStyle={{ ...shape.value.typography, ...inputStyle }}
        title={inputProps?.title ?? behavior.inputValue}
        trailingAddon={
          indicator == null || indicator === false ? null : (
            <Toggle
              {...behavior.toggleProps}
              aria-label={toggleProps?.['aria-label'] ?? DEFAULT_TOGGLE_LABEL}
              className={clsx(classNames?.toggle, toggleProps?.className)}
            >
              <InputIndicator
                shape={shape.indicator}
                appearance={resolvedAppearance.indicator}
                className={classNames?.indicator}
              >
                {indicator}
              </InputIndicator>
            </Toggle>
          )
        }
      />
      {behavior.renderMenu(
        <Listbox
          {...behavior.menuProps}
          appearance={resolvedAppearance.menu}
          className={clsx(classNames?.menu, menuProps?.className)}
          shape={{
            ...menuShape,
            width: status === undefined ? menuShape.width : (statusWidth ?? menuShape.width),
          }}
        >
          {status ??
            behavior.options.map((option, index) => (
              <Option
                key={option.value}
                {...behavior.getOptionProps(option.value, index)}
                shape={shape.option}
                appearance={resolvedAppearance.option}
                focused={behavior.keyboardNavigation && index === behavior.highlightedIndex}
                selected={option.value === behavior.selectedItem}
                className={classNames?.option}
              >
                {renderOption ? renderOption(option) : option.label}
              </Option>
            ))}
        </Listbox>
      )}
    </Container>
  )
}
