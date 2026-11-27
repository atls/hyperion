import type { ReactNode }          from 'react'

import type { SelectProps }        from './interfaces.js'

import { clsx }                    from 'clsx'

import { ChevronDownIcon }         from '@atls-ui-parts/icons'
import { Listbox }                 from '@atls-ui-parts/listbox'
import { Option }                  from '@atls-ui-parts/listbox'
import { useTheme }                from '@atls-ui-parts/theme'

import { Container }               from './container/component.js'
import { Indicator }               from './indicator/component.js'
import { Trigger }                 from './trigger/component.js'
import { Value }                   from './value/component.js'
import { resolveSelectAppearance } from './styles/appearance/resolve.js'
import { selectShapes }            from './styles/shape/variants.js'
import { useSelect }               from './useSelect.js'

export const Select = ({
  options,
  value,
  defaultValue,
  onChange,
  'aria-label': ariaLabel,
  disabled = false,
  placeholder = '',
  shape = selectShapes.md,
  appearance = 'default',
  indicator = <ChevronDownIcon />,
  renderOption,
  triggerProps,
  menuProps,
  classNames,
  className,
  ...props
}: SelectProps): ReactNode => {
  const theme = useTheme()
  const resolvedAppearance = resolveSelectAppearance(appearance, theme, shape)
  const {
    buttonProps,
    menuProps: listProps,
    renderMenu,
    selectedItem,
    highlightedIndex,
    keyboardNavigation,
    getMenuItemProps,
  } = useSelect({
    options,
    value,
    defaultValue,
    onChange,
    'aria-label': ariaLabel,
    disabled,
    triggerProps,
    menuProps,
    shape,
  })
  const selectedOption = options.find((option) => option.value === selectedItem)
  return (
    <Container {...props} className={clsx(classNames?.container, className)}>
      <Trigger
        {...buttonProps}
        appearance={resolvedAppearance.trigger}
        className={clsx(classNames?.trigger, triggerProps?.className)}
        shape={shape.trigger}
        title={triggerProps?.title ?? selectedOption?.label}
      >
        <Value
          appearance={resolvedAppearance.value}
          className={classNames?.value}
          placeholder={!selectedOption}
          shape={shape.value}
        >
          {selectedOption?.label ?? placeholder}
        </Value>
        {indicator !== null && (
          <Indicator
            appearance={resolvedAppearance.indicator}
            className={classNames?.indicator}
            shape={shape.indicator}
          >
            {indicator}
          </Indicator>
        )}
      </Trigger>
      {renderMenu(
        <Listbox
          {...listProps}
          appearance={resolvedAppearance.menu}
          className={clsx(classNames?.menu, menuProps?.className)}
          shape={shape.menu}
        >
          {options.map((option, index) => (
            <Option
              key={option.value}
              {...getMenuItemProps(option.value, index)}
              appearance={resolvedAppearance.option}
              className={classNames?.option}
              focused={keyboardNavigation && highlightedIndex === index}
              shape={shape.option}
            >
              {renderOption ? renderOption(option) : option.label}
            </Option>
          ))}
        </Listbox>
      )}
    </Container>
  )
}
