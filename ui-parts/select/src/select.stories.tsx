import React              from 'react'
import { useState }       from 'react'
import styled             from '@emotion/styled'
import { nanoid }         from 'nanoid'

import { baseMenuStyles } from './menu'
import { baseItemStyles } from './item'
import { useSelect }      from './use-select.hook'

export default { title: 'Components/Select' }

export const Select = () => {
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

  const Button = (props) => <StyledButton {...props}>{value}</StyledButton>
  const Label = (props) => <StyledLabel {...props}>Label</StyledLabel>
  const MenuItem = ({ highlightedIndex, index, item, ...props }) => (
    <StyledMenuItem key={nanoid()} highlighted={highlightedIndex === index} {...props}>
      {item}
    </StyledMenuItem>
  )
  const Menu = (props) => (
    <StyledMenu {...props}>
      {items.map((item, index) => renderMenuItem(MenuItem, item, index))}
    </StyledMenu>
  )

  return (
    <>
      {/* <Label>Label</Label> */}
      {renderButton(Button)}
      {renderMenu(Menu)}
    </>
  )
}
