import type { ReactNode }    from 'react'

import type { SelectProps }  from './select.interfaces.js'

import { clsx }              from 'clsx'
import { motion }            from 'framer-motion'
import React                 from 'react'

import { useSelect }         from '@atls-utils/use-select'

import { MenuItem }          from './item/index.js'
import { baseButtonStyles }  from './button/index.js'
import { baseMenuSprinkles } from './menu/index.js'
import { baseMenuStyles }    from './menu/index.js'

export const Select = ({
  items,
  label,
  value,
  onChangeValue,
  placeholder,
  ...props
}: SelectProps): ReactNode => {
  const {
    isOpen,
    getMenuItemProps,
    labelProps,
    buttonProps,
    menuProps,
    renderMenu,
    highlightedIndex,
  } = useSelect({
    items,
    onChange: onChangeValue,
  })

  const { className, style, otherProps } = baseMenuSprinkles(props)

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label {...labelProps}>{label}</label>
      <button type='button' {...buttonProps} className={baseButtonStyles}>
        {value}
      </button>
      {/* eslint-disable-next-line react/jsx-no-leaked-render */}
      {isOpen &&
        renderMenu(
          <motion.ul
            {...otherProps}
            className={clsx(baseMenuStyles, String(otherProps?.className || ''), className)}
            style={{ ...style, ...otherProps?.style }}
            {...menuProps}
          >
            {items.map((item, index) => (
              <MenuItem
                /* eslint-disable-next-line react/no-array-index-key */
                key={`${item}-${index}`}
                highlighted={index === highlightedIndex}
                {...getMenuItemProps(item, index)}
              >
                {item}
              </MenuItem>
            ))}
          </motion.ul>
        )}
    </>
  )
}
