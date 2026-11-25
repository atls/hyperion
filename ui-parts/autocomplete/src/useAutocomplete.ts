import type { AutocompleteBehaviorProps } from './interfaces.js'
import type { AutocompleteBehavior }      from './interfaces.js'

import { useCombobox }                    from 'downshift'
import { useState }                       from 'react'

import { useFloatingMenu }                from '@atls-utils/use-float'

import { menuAnimationStyles }            from './animation/styles.css.js'
import { filterAutocompleteOptions }      from './filter.js'
export const useAutocomplete = ({
  options,
  value,
  defaultValue,
  onChange,
  inputValue: controlledInputValue,
  defaultInputValue,
  onInputChange,
  open,
  defaultOpen,
  onOpenChange,
  disabled,
  loading,
  filterOptions = filterAutocompleteOptions,
  inputProps,
  toggleProps,
  menuProps,
  shape,
  animation,
  'aria-label': ariaLabel,
}: AutocompleteBehaviorProps): AutocompleteBehavior => {
  const byValue = new Map(options.map((option) => [option.value, option]))
  const [localInputValue, setLocalInputValue] = useState(() => {
    if (defaultInputValue !== undefined) return defaultInputValue
    const initial = value === undefined ? defaultValue : value
    return initial == null ? '' : (byValue.get(initial)?.label ?? '')
  })
  const inputValue = controlledInputValue ?? localInputValue
  const filtered = loading ? [] : filterOptions(options, inputValue)
  const combobox = useCombobox({
    items: filtered.map((option) => option.value),
    itemToString: (item) => (item === null ? '' : (byValue.get(item)?.label ?? '')),
    isItemDisabled: (item) => disabled || Boolean(byValue.get(item)?.disabled),
    inputValue,
    selectedItem: value,
    initialSelectedItem: defaultValue,
    isOpen: open,
    initialIsOpen: defaultOpen,
    onInputValueChange: ({ inputValue: nextValue }) => {
      if (controlledInputValue === undefined) setLocalInputValue(nextValue)
      onInputChange?.(nextValue)
    },
    onSelectedItemChange: ({ selectedItem }) => onChange?.(selectedItem),
    onIsOpenChange: ({ isOpen }) => onOpenChange?.(isOpen),
    stateReducer: (_state, { type, changes }) =>
      type === useCombobox.stateChangeTypes.InputChange && changes.inputValue === ''
        ? { ...changes, selectedItem: null }
        : changes,
  })
  const { refs, renderMenu } = useFloatingMenu({
    open: combobox.isOpen,
    offset: shape.container.offset,
    animation: animation.menu,
    className: menuAnimationStyles,
  })
  return {
    inputProps: combobox.getInputProps({
      ...inputProps,
      'aria-label': ariaLabel,
      'aria-busy': loading,
      disabled,
    }),
    toggleProps: combobox.getToggleButtonProps({ ...toggleProps, disabled }),
    menuProps: combobox.getMenuProps(
      { ...menuProps, 'aria-label': ariaLabel, 'aria-busy': loading },
      { suppressRefError: !combobox.isOpen }
    ),
    getOptionProps: (item, index) => combobox.getItemProps({ item, index }),
    referenceRef: refs.setReference,
    renderMenu,
    options: filtered,
    inputValue,
    selectedItem: combobox.selectedItem,
    highlightedIndex: combobox.highlightedIndex,
  }
}
