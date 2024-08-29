import type { ReactNode }                  from 'react'
import type { ReactPortal }                from 'react'

import type { UseSelectProps }             from './select.interfaces.js'

import { AnimatePresence }                 from 'framer-motion'
import { useSelect as useDownshiftSelect } from 'downshift'
import { useEffect }                       from 'react'
import { useLayer }                        from 'react-laag'
import React                               from 'react'

// eslint-disable-next-line
const useSelect = ({ items, onChange, placement = 'bottom-center', ...props }: UseSelectProps) => {
  const {
    isOpen,
    selectedItem,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
  } = useDownshiftSelect({ items, ...props })

  const { renderLayer, layerProps, triggerProps, triggerBounds } = useLayer({
    isOpen,
    placement,
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
  const getMenuItemProps = (item: string, index: number): any => getItemProps({ item, index })
  const renderMenu = (menu: ReactNode): ReactPortal | null =>
    // eslint-disable-next-line react/jsx-no-leaked-render
    renderLayer(<AnimatePresence>{isOpen && menu}</AnimatePresence>)

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
