/* eslint-disable @typescript-eslint/no-shadow */

import React                       from 'react'
import { AnimatePresence }         from 'framer-motion'
import { Placement }               from 'react-laag'
import { useCombobox }             from 'downshift'
import { useEffect }               from 'react'
import { useState }                from 'react'
import { useLayer }                from 'react-laag'

import { Input }                   from '@atls-ui-proto/input'

import { Arrow }                   from './indicator'
import { Indicator }               from './indicator'
import { Layer }                   from './layer'
import { Menu }                    from './menu'
import { MenuItem }                from './menu-item'
import { createMenuItemsRenderer } from './factories'
import { createMenuRenderer }      from './factories'

const MenuItemsRenderer = createMenuItemsRenderer(MenuItem)

const MenuRenderer = createMenuRenderer(Menu)

const defaultGetOptionLabel = (option) => (option ? option.value : '')

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

  const { layerProps, renderLayer, triggerProps, triggerBounds } = useLayer({
    isOpen,
    auto: true,
    triggerOffset: 0,
    placement: 'bottom-start',
    possiblePlacements: ['bottom-start', 'top-start'] as Array<Placement>,
  })

  useEffect(() => {
    if (inputValue && selectedItem && inputValue !== getOptionLabel(selectedItem)) {
      setItems(
        options.filter((item) =>
          getOptionLabel(item).toLowerCase().startsWith(inputValue.toLowerCase()))
      )
    } else {
      setItems(options)
    }
  }, [options, inputValue, selectedItem, getOptionLabel])

  useEffect(() => {
    if (onInputChange) {
      onInputChange(inputValue)
    }
  }, [inputValue, onInputChange])

  const suffix = (
    <Indicator {...getToggleButtonProps()} isOpen={isOpen}>
      <Arrow />
    </Indicator>
  )

  const { onChange: downshiftOnChange, ...restProps } = getInputProps(triggerProps)
  const menuProps = getMenuProps({ style: {} })
  const inputProps = { ...restProps, onChangeNative: downshiftOnChange }

  return (
    <>
      <Input onFocus={openMenu} suffix={suffix} {...inputProps} />
      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <Layer ref={layerProps.ref} style={layerProps.style} width={triggerBounds?.width}>
              <MenuRenderer {...menuProps}>
                <MenuItemsRenderer
                  items={items}
                  getItemProps={getItemProps}
                  highlightedIndex={highlightedIndex}
                  selectedItem={selectedItem}
                  getOptionLabel={getOptionLabel}
                />
              </MenuRenderer>
            </Layer>
          )}
        </AnimatePresence>
      )}
    </>
  )
}

export { Autocomplete }
