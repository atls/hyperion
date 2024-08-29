/* eslint-disable @typescript-eslint/no-shadow */

import type { FC }                from 'react'

import type { AutocompleteProps } from './autocomplete.interfaces.js'
import type { ValueType }         from './autocomplete.interfaces.js'

import { AnimatePresence }        from 'framer-motion'
import { useCombobox }            from 'downshift'
import { useEffect }              from 'react'
import { useState }               from 'react'
import { useLayer }               from 'react-laag'
import React                      from 'react'

import { Input }                  from '@atls-ui-parts/input'

import { Arrow }                  from './arrow/index.js'
import { Indicator }              from './indicator/index.js'
import { Layer }                  from './layer/index.js'
import { MenuItem }               from './menu-item/index.js'
import { Menu }                   from './menu/index.js'

export const Autocomplete: FC<AutocompleteProps> = ({
  options = [],
  value,
  getOptionLabel = (option: ValueType | null): string => (option ? option.value : ''),
  onChange,
  onInputChange,
}) => {
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
      if (selectedItem) {
        onChange?.(selectedItem)
      }
    },
    onIsOpenChange: ({ selectedItem, inputValue }) => {
      if (selectedItem && !inputValue) {
        onChange?.({ value: '' })
      }
    },
  })

  const { layerProps, renderLayer, triggerProps, triggerBounds } = useLayer({
    isOpen,
    auto: true,
    triggerOffset: 0,
    placement: 'bottom-start',
    possiblePlacements: ['bottom-start', 'top-start'],
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
    onInputChange?.(inputValue)
  }, [inputValue, onInputChange])

  const suffix = (
    <Indicator {...getToggleButtonProps()}>
      <Arrow isOpen={isOpen} />
    </Indicator>
  )

  return (
    <>
      <Input
        size='normal'
        variant='blue'
        suffix={suffix}
        onFocus={openMenu}
        {...getInputProps(triggerProps)}
      />
      {renderLayer(
        <AnimatePresence>
          {/* eslint-disable-next-line react/jsx-no-leaked-render */}
          {isOpen && (
            <Layer
              ref={layerProps.ref}
              style={{ ...layerProps.style, width: triggerBounds?.width }}
            >
              <Menu {...getMenuProps({ style: {} })}>
                {items.map((item, index) => (
                  <MenuItem
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    {...getItemProps({ key: item.value, index, item })}
                    selected={selectedItem === item}
                    hover={highlightedIndex === index}
                  >
                    {getOptionLabel(item)}
                  </MenuItem>
                ))}
              </Menu>
            </Layer>
          )}
        </AnimatePresence>
      )}
    </>
  )
}
