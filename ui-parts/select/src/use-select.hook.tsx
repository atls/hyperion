import React                               from 'react'
import { useEffect }                       from 'react'
import { useLayer }                        from 'react-laag'
import { useSelect as useDownshiftSelect } from 'downshift'
import { AnimatePresence }                 from 'framer-motion'

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
  const { renderLayer, layerProps, triggerProps } = useLayer({
    isOpen,
    placement: 'bottom-center',
  })

  useEffect(() => {
    if (onChange && selectedItem) onChange(selectedItem)
  }, [selectedItem, onChange])

  const renderLabel = (Label) => <Label {...getLabelProps()} />
  const renderButton = (Button) => <Button {...getToggleButtonProps()} {...triggerProps} />
  const renderMenu = (Menu) =>
    renderLayer(
      <AnimatePresence>{isOpen && <Menu {...getMenuProps(layerProps)} />}</AnimatePresence>
    )
  const renderMenuItem = (MenuItem, item, index) => (
    <MenuItem {...getItemProps} item={item} index={index} highlightedIndex={highlightedIndex} />
  )

  // const renderLabel = createLabelRenderer(getLabelProps)
  // const renderButton = createButtonRenderer(getToggleButtonProps)
  // const renderMenu = createMenuRenderer(getMenuProps, renderLayer, isOpen)
  // const renderMenuItem = createMenuItemRenderer(getItemProps, highlightedIndex, isOpen)

  return {
    renderLabel,
    renderButton,
    renderMenu,
    renderMenuItem,
    selectedItem,
  }
}

export { useSelect }
