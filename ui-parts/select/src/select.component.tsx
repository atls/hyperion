import React, { useEffect }       from 'react'
import { FC }                     from 'react'
import { useLayer }               from 'react-laag'
import { useSelect }              from 'downshift'

import { Button }                 from './button'
import { Label }                  from './label'
import { Item }                   from './item'
import { Menu }                   from './menu'
import { SelectProps }            from './select.interfaces'

import { createButtonRenderer }   from './factories'
import { createLabelRenderer }    from './factories'
import { createMenuRenderer }     from './factories'
import { createMenuItemRenderer } from './factories'
import { createLayerRenderer }    from './factories'

const ButtonRenderer = createButtonRenderer(Button)
const LabelRenderer = createLabelRenderer(Label)
const MenuRenderer = createMenuRenderer(Menu)
const MenuItemRenderer = createMenuItemRenderer(Item)
const LayerRenderer = createLayerRenderer()

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
      <LabelRenderer getLabelProps={getLabelProps} label={label} {...props} />
      <ButtonRenderer
        height={height}
        width={width}
        buttonColor={buttonColor}
        placeholder={placeholder}
        arrow={arrow}
        arrowSize={arrowSize}
        isOpen={isOpen}
        selectedItem={selectedItem}
        triggerProps={triggerProps}
        getToggleButtonProps={getToggleButtonProps}
        {...props}
      />
      <LayerRenderer isOpen={isOpen} renderLayer={renderLayer}>
        <MenuRenderer
          triggerBounds={triggerBounds}
          dropdownColor={dropdownColor}
          layerProps={layerProps}
          getMenuProps={getMenuProps}
          {...props}
        >
          {items.map((item, index) => (
            <MenuItemRenderer
              hoverTrigger={highlightedIndex === index}
              hoverBackgroundColor={hoverBackgroundColor}
              hoverFontColor={hoverFontColor}
              key={`${item}${Math.random()}`}
              item={item}
              index={index}
              getItemProps={getItemProps}
              {...props}
            />
          ))}
        </MenuRenderer>
      </LayerRenderer>
    </>
  )
}
