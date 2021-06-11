import React       from 'react'
import { useMemo } from 'react'

export const createMenuItemRenderer =
  (MenuItem) =>
  ({
    hoverTrigger,
    hoverBackgroundColor,
    hoverFontColor,
    item,
    index,
    getItemProps,
    ...menuItemProps
  }) => {
    const props = useMemo(
      () => ({
        ...getItemProps({ item, index }),
        ...menuItemProps,
      }),
      [getItemProps, item, index, menuItemProps]
    )

    return (
      <MenuItem
        hoverTrigger={hoverTrigger}
        hoverBackgroundColor={hoverBackgroundColor}
        hoverFontColor={hoverFontColor}
        key={`${item}${Math.random()}`}
        {...props}
      >
        {item}
      </MenuItem>
    )
  }
