import { useEffect }                       from 'react'
import { useSelect as useDownshiftSelect } from 'downshift'

import { createButtonRenderer }            from './factories'
import { createMenuRenderer }              from './factories'
import { createMenuItemRenderer }          from './factories'
import { createLabelRenderer }             from './factories'
import { UseSelectProps }                  from './select.interfaces'

const useSelect = ({ items, onChange }: UseSelectProps) => {
  const {
    isOpen,
    highlightedIndex,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
  } = useDownshiftSelect({ items })

  useEffect(() => {
    if (onChange && selectedItem) onChange(selectedItem)
  }, [selectedItem, onChange])

  const renderLabel = createLabelRenderer(getLabelProps)
  const renderButton = createButtonRenderer(getToggleButtonProps)
  const renderMenu = createMenuRenderer(getMenuProps)
  const renderMenuItem = createMenuItemRenderer(getItemProps, highlightedIndex, isOpen)

  return {
    renderLabel,
    renderButton,
    renderMenu,
    renderMenuItem,
    selectedItem,
  }
}

export { useSelect }
