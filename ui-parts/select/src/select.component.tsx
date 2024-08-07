import React                 from 'react'
import { clsx }              from 'clsx'
import { motion }            from 'framer-motion'

import { useSelect }         from '@atls-utils/use-select'

import { MenuItem }          from './item/index.js'
import { SelectProps }       from './select.interfaces.js'
import { baseButtonStyles }  from './button/index.js'
import { baseMenuSprinkles } from './menu/index.js'
import { baseMenuStyles }    from './menu/index.js'

export const Select: React.FC<SelectProps> = ({
  items,
  label,
  value,
  onChangeValue,
  placeholder,
  ...props
}) => {
  const { getMenuItemProps, labelProps, buttonProps, menuProps, renderMenu, highlightedIndex } =
    useSelect({
      items,
      onChange: onChangeValue,
    })

  const { className, style, otherProps } = baseMenuSprinkles(props)

  return (
    <>
      <label {...labelProps}>{label}</label>
      <button {...buttonProps} className={baseButtonStyles}>
        {value}
      </button>
      {renderMenu(
        <motion.ul
          {...otherProps}
          className={clsx(baseMenuStyles, otherProps?.className, className)}
          style={{ ...style, ...otherProps?.style }}
          {...menuProps}
        >
          {items.map((item, index) => (
            <MenuItem
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
