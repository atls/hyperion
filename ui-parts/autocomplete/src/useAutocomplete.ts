import type { PointerEvent }              from 'react'

import type { AutocompleteBehaviorProps } from './interfaces.js'
import type { AutocompleteBehavior }      from './interfaces.js'
import type { AutocompleteOption }        from './interfaces.js'

import { useCombobox }                    from 'downshift'
import { useState }                       from 'react'
import { useEffect }                      from 'react'

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
  const [keyboardNavigation, setKeyboardNavigation] = useState(false)
  const [localInputValue, setLocalInputValue] = useState(() => {
    if (defaultInputValue !== undefined) return defaultInputValue
    const initial = value === undefined ? defaultValue : value
    return initial == null ? '' : (byValue.get(initial)?.label ?? '')
  })
  const inputValue = controlledInputValue ?? localInputValue
  const filtered = loading ? [] : filterOptions(options, inputValue)
  const [lastSelectedOption, setLastSelectedOption] = useState<AutocompleteOption | null>(null)
  const retainedOption = lastSelectedOption?.value === value ? lastSelectedOption : null
  const selectedOption = value == null ? value : (byValue.get(value) ?? retainedOption)
  useEffect(() => {
    if (selectedOption) setLastSelectedOption(selectedOption)
  }, [selectedOption])
  const combobox = useCombobox({
    items: [...filtered],
    itemToString: (item) => item?.label ?? '',
    itemToKey: (item) => item?.value ?? null,
    isItemDisabled: (item) => disabled || Boolean(item.disabled),
    inputValue,
    selectedItem: selectedOption,
    initialSelectedItem: defaultValue == null ? undefined : byValue.get(defaultValue),
    isOpen: open,
    initialIsOpen: defaultOpen,
    onInputValueChange: ({ inputValue: nextValue }) => {
      if (controlledInputValue === undefined) setLocalInputValue(nextValue)
      onInputChange?.(nextValue)
    },
    onSelectedItemChange: ({ selectedItem }) => onChange?.(selectedItem?.value ?? null),
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
      onKeyDown: (event) => {
        setKeyboardNavigation(true)
        inputProps?.onKeyDown?.(event)
      },
      onPointerDown: (event) => {
        setKeyboardNavigation(false)
        inputProps?.onPointerDown?.(event)
      },
    }),
    toggleProps: combobox.getToggleButtonProps({
      ...toggleProps,
      disabled,
      onKeyDown: (event) => {
        setKeyboardNavigation(true)
        toggleProps?.onKeyDown?.(event)
      },
      onPointerDown: (event) => {
        setKeyboardNavigation(false)
        toggleProps?.onPointerDown?.(event)
      },
    }),
    menuProps: combobox.getMenuProps(
      {
        ...menuProps,
        'aria-label': ariaLabel,
        onPointerMove: (event: PointerEvent<HTMLUListElement>) => {
          setKeyboardNavigation(false)
          menuProps?.onPointerMove?.(event)
        },
        onPointerDown: (event: PointerEvent<HTMLUListElement>) => {
          setKeyboardNavigation(false)
          menuProps?.onPointerDown?.(event)
        },
      },
      { suppressRefError: !combobox.isOpen }
    ),
    getOptionProps: (item, index) => combobox.getItemProps({ item, index }),
    referenceRef: refs.setReference,
    renderMenu,
    options: filtered,
    inputValue,
    selectedItem: combobox.selectedItem?.value ?? null,
    highlightedIndex: combobox.highlightedIndex,
    keyboardNavigation,
  }
}
