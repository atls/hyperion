import React from 'react'

const createMenuItemsRenderer = (MenuItem) =>
  ({ getItemProps, highlightedIndex, selectedItem, items, getOptionLabel }) =>
    items.map((item, index) => (
      <MenuItem
        {...getItemProps({
          key: item.value,
          index,
          item,
        })}
        selected={selectedItem === item}
        hovered={highlightedIndex === index}
      >
        {getOptionLabel(item)}
      </MenuItem>
    ))

export { createMenuItemsRenderer }
