import React           from 'react'
import { FC }          from 'react'

import { Row }         from '@atls-ui-parts/layout'
import { Text }        from '@atls-ui-parts/text'
import { Button }      from '@atls-ui-proto/button'
import { useSelect }   from '@atls-ui-parts/select'

import { Menu }        from './menu'
import { MenuItem }    from './menu-item'
import { SelectProps } from './select.interface'

export const Select: FC<SelectProps> = ({ items, value, onChange, placeholder, disabled }) => {
  const { buttonProps, menuProps, getMenuItemProps, renderMenu, selectedItem, highlightedIndex } =
    useSelect({
      items,
      onChange,
    })

  return (
    <>
      <Button isSelected={!!selectedItem} disabled={disabled} {...buttonProps}>
        <Row>
          <Text color='white' fontSize='semiRegular'>
            {value || selectedItem || placeholder}
          </Text>
        </Row>
      </Button>
      {renderMenu(
        <Menu {...menuProps}>
          {items.map((item, index) => (
            <MenuItem
              key={item}
              {...getMenuItemProps(item, index)}
              highlighted={index === highlightedIndex}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  )
}
