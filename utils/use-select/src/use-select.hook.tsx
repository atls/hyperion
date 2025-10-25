import type { ReactNode }                  from 'react'

import type { UseSelectProps }             from './select.interfaces.js'

import { FloatingPortal }                  from '@floating-ui/react'
import { AnimatePresence }                 from 'framer-motion'
import { useSelect as useDownshiftSelect } from 'downshift'
import { useEffect }                       from 'react'

import { useFloat }                        from '@atls-utils/use-float'

// eslint-disable-next-line
const useSelect = ({ items, onChange, placement = 'bottom', ...props }: UseSelectProps) => {
  const {
    isOpen,
    selectedItem,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
  } = useDownshiftSelect({ items, ...props })

  const { refs, floatingStyles, getFloatingProps, getReferenceProps } = useFloat({
    open: isOpen,
    placement,
  })

  useEffect(() => {
    if (onChange && selectedItem) onChange(selectedItem)
  }, [selectedItem, onChange])

  const labelProps = getLabelProps()
  const buttonProps = getToggleButtonProps({ ref: refs.setReference, ...getReferenceProps() })
  const menuProps = getMenuProps()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getMenuItemProps = (item: string, index: number): any => getItemProps({ item, index })
  const renderMenu = (menu: ReactNode): ReactNode => (
    <FloatingPortal>
      <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
        {/* eslint-disable-next-line react/jsx-no-leaked-render */}
        <AnimatePresence>{isOpen && menu}</AnimatePresence>
      </div>
    </FloatingPortal>
  )

  return {
    labelProps,
    buttonProps,
    menuProps,
    getMenuItemProps,
    renderMenu,
    selectedItem,
    isOpen,
    highlightedIndex,
  }
}

export { useSelect }
