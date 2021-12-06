import React              from 'react'
import { useState }       from 'react'
import styled             from '@emotion/styled'
import { nanoid }         from 'nanoid'

import { baseMenuStyles } from './menu'
import { baseItemStyles } from './item'
import { useSelect }      from './use-select.hook'

export default { title: 'Components/Select' }

export const Select = (props) => {
  const items = ['Item1', 'Item2', 'Item3']

  const [value, setValue] = useState('Placeholder')

  const { renderButton, renderLabel, renderMenu, renderMenuItem } = useSelect({
    items,
    onChange: setValue,
  })

  const StyledButton = styled.button({ width: 200 })
  const StyledLabel = styled.label()
  const StyledMenu = styled.ul(baseMenuStyles)
  const StyledMenuItem = styled.li<{ highlighted: boolean }>(baseItemStyles, ({ highlighted }) => ({
    color: highlighted ? 'aqua' : 'black',
  }))

  const Button = renderButton(StyledButton)
  const Label = renderLabel(StyledLabel)
  const Menu = renderMenu(StyledMenu)
  const MenuItem = renderMenuItem(StyledMenuItem)

  return (
    <>
      <Label>Label</Label>
      <Button>{value}</Button>
      <Menu>
        {items.map((item, index) => (
          <MenuItem key={nanoid()} index={index} item={item} />
        ))}
      </Menu>
    </>
  )
}
