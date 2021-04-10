import React            from 'react'

import { IconsManager } from '../index'

type ExampleProps = {
  color: 'red' | 'black' | 'yellow' | 'white'
  hoverColor: 'red' | 'black' | 'yellow' | 'white'
  clickedColor: 'red' | 'black' | 'yellow' | 'white'
}

const Icon = ({ color = 'red' }) => <h1 style={{ color: `${color}` }}>I can change color</h1>

export const ExampleIconsManager = ({
  color = 'red',
  hoverColor = 'yellow',
  clickedColor = 'black',
}: ExampleProps) => {
  return (
    <IconsManager color={color} hoverColor={hoverColor} clickedColor={clickedColor}>
      <Icon />
    </IconsManager>
  )
}

export default {
  title: 'IconsManager',
  component: ExampleIconsManager,
}
