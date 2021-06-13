import React       from 'react'
import { useMemo } from 'react'

export const createMenuRenderer =
  (Menu) =>
  ({ dropdownColor, triggerBounds, layerProps, getMenuProps, ...menuProps }) => {
    const props = useMemo(
      () => ({
        ...getMenuProps(layerProps),
        ...menuProps,
      }),
      [layerProps, menuProps, getMenuProps]
    )

    return (
      <Menu
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        width={triggerBounds?.width}
        backgroundColor={dropdownColor}
        {...props}
      />
    )
  }
