import type { ReactNode }    from 'react'

import type { SelectProps }  from './interfaces.js'

import { clsx }              from 'clsx'
import { motion }            from 'framer-motion'

import { useSelect }         from '@atls-utils/use-select'

import { MenuItem }          from './item/index.js'
import { baseButtonStyles }  from './button/index.js'
import { baseMenuStyles }    from './menu/index.js'
import { selectAppearances } from './styles/index.js'
import { selectShapes }      from './styles/index.js'

export const Select = ({
  appearance = selectAppearances.default,
  items,
  label,
  menuProps: menuPropsProperty,
  value,
  onChangeValue,
  placeholder,
  shape = selectShapes.default,
  width,
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

  const triggerValue = value || placeholder
  const { className, style, ...props } = menuPropsProperty ?? {}
  const menuStyle = width === undefined ? style : { width, ...style }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label {...labelProps}>{label}</label>
      <button
        type='button'
        {...buttonProps}
        className={clsx(baseButtonStyles, appearance.trigger, shape.trigger)}
      >
        {triggerValue}
      </button>
      {}
      {isOpen &&
        renderMenu(
          <motion.ul
            {...props}
            {...menuProps}
            className={clsx(baseMenuStyles, appearance.menu, shape.menu, className)}
            style={menuStyle}
          >
            {items.map((item, index) => (
              <MenuItem
                /* eslint-disable-next-line react/no-array-index-key */
                key={`${item}-${index}`}
                highlighted={index === highlightedIndex}
                {...getMenuItemProps(item, index)}
                highlightedClassName={appearance.highlightedItem}
                className={clsx(appearance.item, shape.item)}
              >
                {item}
              </MenuItem>
            ))}
          </motion.ul>
        )}
    </>
  )
}
