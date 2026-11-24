import type { UseSelectReturn }           from '@atls-utils/use-select'

import type { SelectBehaviorProps }       from './interfaces.js'

import { useSelect as useSelectBehavior } from '@atls-utils/use-select'

export const useSelect = ({
  options,
  value,
  defaultValue,
  onChange,
  label,
  disabled,
  triggerProps,
  menuProps,
  shape,
}: SelectBehaviorProps): UseSelectReturn => {
  const optionsByValue = new Map(options.map((option) => [option.value, option]))
  return useSelectBehavior({
    items: options.map((option) => option.value),
    itemToString: (item) => (item === null ? '' : (optionsByValue.get(item)?.label ?? '')),
    isItemDisabled: (item) => disabled || Boolean(optionsByValue.get(item)?.disabled),
    selectedItem: value,
    initialSelectedItem: defaultValue,
    onSelectedItemChange: ({ selectedItem }) => onChange?.(selectedItem),
    placement: 'bottom-start',
    offset: shape.container.offset,
    toggleButtonProps: { 'aria-label': label, ...triggerProps, disabled, type: 'button' },
    listProps: { 'aria-label': label, ...menuProps },
  })
}
