/* eslint-disable no-shadow */

import React, { useEffect, useState }                  from 'react'
import { useCombobox }                                 from 'downshift'

import { Input }                                       from '@atls-ui-parts/input'

import { Arrow, Indicator }                            from './indicator'
import { Layer }                                       from './layer'
import { Menu }                                        from './menu'
import { MenuItem }                                    from './menu-item'
import { ToggleLayer }                                 from './toggle-layer'
import { createMenuItemsRenderer, createMenuRenderer } from './factories'
import { createInputRenderer, createLayerRenderer }    from './factories'

const MenuItemsRenderer = createMenuItemsRenderer(MenuItem)
const LayerRenderer = createLayerRenderer(Layer)
const MenuRenderer = createMenuRenderer(Menu)
const inputRenderer = createInputRenderer(Input)

const defaultGetOptionLabel = option => (option ? option.value : '')

const Autocomplete = (
  { options = [], value, getOptionLabel = defaultGetOptionLabel, onChange, onInputChange }: any,
  ref
) => {
  const [items, setItems] = useState(options)

  const {
    isOpen,
    inputValue,
    selectedItem,
    highlightedIndex,
    getMenuProps,
    getInputProps,
    getItemProps,
    getToggleButtonProps,
    openMenu,
  } = useCombobox({
    items,
    itemToString: getOptionLabel,
    defaultSelectedItem: value,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem && onChange) {
        onChange(selectedItem)
      }
    },
    onIsOpenChange: ({ selectedItem, inputValue }) => {
      if (onChange && selectedItem && !inputValue) {
        onChange(null)
      }
    },
  })

  useEffect(() => {
    if (inputValue && selectedItem && inputValue !== getOptionLabel(selectedItem)) {
      setItems(
        options.filter(item =>
          getOptionLabel(item)
            .toLowerCase()
            .startsWith(inputValue.toLowerCase())
        )
      )
    } else {
      setItems(options)
    }
  }, [options, inputValue, selectedItem])

  useEffect(() => {
    if (onInputChange) {
      onInputChange(inputValue)
    }
  }, [inputValue, onInputChange])

  const renderLayer = ({ isOpen, layerProps, triggerRect }) => (
    <LayerRenderer isOpen={isOpen} layerProps={layerProps} triggerRect={triggerRect}>
      <MenuRenderer getMenuProps={getMenuProps}>
        <MenuItemsRenderer
          items={items}
          getItemProps={getItemProps}
          highlightedIndex={highlightedIndex}
          selectedItem={selectedItem}
          getOptionLabel={getOptionLabel}
        />
      </MenuRenderer>
    </LayerRenderer>
  )

  const suffix = (
    <Indicator {...getToggleButtonProps()} isOpen={isOpen}>
      <Arrow />
    </Indicator>
  )

  return (
    <ToggleLayer isOpen={isOpen} renderLayer={renderLayer}>
      {inputRenderer(getInputProps, { onFocus: openMenu, suffix })}
    </ToggleLayer>
  )
}

export { Autocomplete }
