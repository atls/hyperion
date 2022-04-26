import styled             from '@emotion/styled'

import React              from 'react'
import { motion }         from 'framer-motion'
import { nanoid }         from 'nanoid'
import { useState }       from 'react'

import { baseItemStyles } from './item'
import { baseMenuStyles } from './menu'
import { useSelect }      from './use-select.hook'

export default { title: 'Components/Select' }

// TODO throw an error if they were created inside component where useSelect was called
const Button = styled.button({ width: 200 })
const Label = styled.label()
const Menu = styled(motion.ul)(baseMenuStyles)
const MenuItem = styled.li<{ highlighted: boolean }>(baseItemStyles, ({ highlighted }) => ({
  backgroundColor: highlighted ? 'aqua' : 'transparent',
  height: 40,
}))

export const Select = () => {
  const items = ['Item1', 'Item2', 'Item3']

  const [value, setValue] = useState('Placeholder')

  const { getMenuItemProps, labelProps, buttonProps, menuProps, renderMenu, highlightedIndex } =
    useSelect({
      items,
      onChange: setValue,
    })

  return (
    <>
      <Label {...labelProps}>Label</Label>
      <Button {...buttonProps}>{value}</Button>
      {renderMenu(
        <Menu {...menuProps}>
          {items.map((item, index) => (
            <MenuItem
              key={nanoid()}
              highlighted={index === highlightedIndex}
              {...getMenuItemProps(item, index)}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  )
}
