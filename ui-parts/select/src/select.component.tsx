import React, { useEffect } from 'react'
import { FC }               from 'react'
import { useLayer }         from 'react-laag'
import { useSelect }        from 'downshift'
import { AnimatePresence }  from 'framer-motion'

import { Box }              from './box'
import { Label }            from './label'
import { Item }             from './item'
import { Button }           from './button'
import { Menu }             from './menu'
import { SelectProps }      from './select.interfaces'
import { ArrowDownIcon }    from './icons'

export const Select: FC<SelectProps> = ({
  label,
  items,
  width,
  height,
  placeholder = '',
  buttonColor = 'white',
  dropdownColor = 'white',
  hoverBackgroundColor = 'lightBlue',
  hoverFontColor = 'white',
  arrow = true,
  arrowSize = 15,
  onChange,
  ...props
}) => {
  const {
    isOpen,
    highlightedIndex,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
  } = useSelect({ items })

  useEffect(() => {
    if (selectedItem) onChange(selectedItem)
  }, [selectedItem, onChange])

  const { renderLayer, triggerProps, layerProps, triggerBounds } = useLayer({
    isOpen,
    placement: 'bottom-start',
  })
  return (
    <>
      {label && (
        <Label {...getLabelProps()} {...props}>
          {label}
        </Label>
      )}
      <Button
        width={width}
        height={height}
        backgroundColor={buttonColor}
        {...props}
        {...getToggleButtonProps(triggerProps)}
      >
        <Box height={height} overflow>
          {selectedItem || placeholder}
        </Box>
        <Box>{arrow && <ArrowDownIcon width={arrowSize} height={arrowSize} active={isOpen} />}</Box>
      </Button>
      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <Menu
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              width={triggerBounds?.width}
              backgroundColor={dropdownColor}
              {...props}
              {...getMenuProps(layerProps)}
            >
              {items.map((item, index) => (
                <Item
                  hoverTrigger={highlightedIndex === index}
                  hoverBackgroundColor={hoverBackgroundColor}
                  hoverFontColor={hoverFontColor}
                  key={`${item}${Math.random()}`}
                  {...props}
                  {...getItemProps({ item, index })}
                >
                  {item}
                </Item>
              ))}
            </Menu>
          )}
        </AnimatePresence>
      )}
    </>
  )
}
