import React                               from 'react'
import { useEffect }                       from 'react'
import { useLayer }                        from 'react-laag'
import { useSelect as useDownshiftSelect } from 'downshift'
import { AnimatePresence }                 from 'framer-motion'

import { UseSelectProps }                  from './select.interfaces'

const useSelect = ({ items, onChange, ...props }: UseSelectProps) => {
  const {
    isOpen,
    highlightedIndex,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
  } = useDownshiftSelect({ items, ...props })

  const { renderLayer, layerProps, triggerProps, triggerBounds } = useLayer({
    isOpen,
    placement: 'bottom-center',
  })

  useEffect(() => {
    if (onChange && selectedItem) onChange(selectedItem)
  }, [selectedItem, onChange])

  const labelProps = getLabelProps()
  const buttonProps = getToggleButtonProps(triggerProps)
  const menuProps = {
    ...getMenuProps(layerProps),
    triggerBounds,
  }
  const getMenuItemProps = (item, index) => getItemProps({ item, index })
  const renderMenu = (menu) => renderLayer(<AnimatePresence>{isOpen && menu}</AnimatePresence>)

  return {
    labelProps,
    buttonProps,
    menuProps,
    getMenuItemProps,
    renderMenu,
    selectedItem,
    isOpen,
    highlightedIndex,
    triggerBounds,
  }
}

export { useSelect }
