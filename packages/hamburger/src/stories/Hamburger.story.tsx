import React         from 'react'

import { Hamburger } from '../index'

type ExampleProps = {
  color: 'alto' | 'white'
  active: boolean
  onOpen: () => {}
  onClose: () => {}
}

export const ExampleHamburger = ({ color = 'alto', active, onOpen, onClose }: ExampleProps) => (
  <Hamburger color={color} active={active} onClose={onClose} onOpen={onOpen} />
)

export default {
  title: 'Hamburger',
  component: ExampleHamburger,
}
