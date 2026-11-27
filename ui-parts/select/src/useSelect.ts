import type { SelectBehaviorProps }       from './interfaces.js'
import type { SelectBehaviorReturn }      from './interfaces.js'

import { useState }                       from 'react'

import { useSelect as useSelectBehavior } from '@atls-utils/use-select'

export const useSelect = ({
  options,
  value,
  defaultValue,
  onChange,
  'aria-label': ariaLabel,
  disabled,
  triggerProps,
  menuProps,
  shape,
}: SelectBehaviorProps): SelectBehaviorReturn => {
  const [keyboardNavigation, setKeyboardNavigation] = useState(false)
  const optionsByValue = new Map(options.map((option) => [option.value, option]))
  const behavior = useSelectBehavior({
    items: options.map((option) => option.value),
    itemToString: (item) => (item === null ? '' : (optionsByValue.get(item)?.label ?? '')),
    isItemDisabled: (item) => disabled || Boolean(optionsByValue.get(item)?.disabled),
    selectedItem: value,
    initialSelectedItem: defaultValue,
    onSelectedItemChange: ({ selectedItem }) => onChange?.(selectedItem),
    placement: 'bottom-start',
    offset: shape.container.offset,
    toggleButtonProps: {
      'aria-label': ariaLabel,
      ...triggerProps,
      disabled,
      type: 'button',
      onKeyDown: (event) => {
        setKeyboardNavigation(true)
        triggerProps?.onKeyDown?.(event)
      },
      onPointerDown: (event) => {
        setKeyboardNavigation(false)
        triggerProps?.onPointerDown?.(event)
      },
    },
    listProps: {
      'aria-label': ariaLabel,
      ...menuProps,
      onPointerMove: (event) => {
        setKeyboardNavigation(false)
        menuProps?.onPointerMove?.(event)
      },
      onPointerDown: (event) => {
        setKeyboardNavigation(false)
        menuProps?.onPointerDown?.(event)
      },
    },
  })
  return { ...behavior, keyboardNavigation }
}
