import React       from 'react'
import { useMemo } from 'react'

const createMenuItemRenderer =
  (getItemProps, highlightedIndex, isOpen) =>
  (MenuItem) =>
  ({ item, index, ...menuItemProps }) => {
    const props = useMemo(
      () => ({
        ...getItemProps({ index, item }),
        ...menuItemProps,
      }),
      [menuItemProps, index, item]
    )

    return isOpen ? (
      <MenuItem highlighted={index === highlightedIndex} {...props}>
        {item}
      </MenuItem>
    ) : null
  }

export { createMenuItemRenderer }
