import React                              from 'react'
import styled                             from '@emotion/styled'

import { Link as LinkBase }               from './index'
import { NextLink as NextLinkBase }       from './index'
import { NextNavLink as NextNavLinkBase } from './index'
import { createActiveStyles }             from './index'
import { createHoverStyles }              from './index'
import { createTransitionStyles }         from './index'

export default {
  title: 'Components/Link',
}

const activeStyles = createActiveStyles({ color: 'yellow' })
const hoverStyles = createHoverStyles({ color: 'blue' })
const transitionStyles = createTransitionStyles('.2s')

const applyStyles = (Component) => styled(Component)(activeStyles, hoverStyles, transitionStyles)

export const Link = (props) => {
  const LinkComponent = applyStyles(LinkBase)
  return <LinkComponent {...props} />
}

export const NextLink = (props) => {
  const NextLinkComponent = applyStyles(NextLinkBase)
  return <NextLinkComponent {...props} />
}

export const NextNavLink = (props) => {
  const NextNavLinkComponent = applyStyles(NextNavLinkBase)
  return <NextNavLinkComponent {...props} />
}

Link.args = {
  children: 'Clickable',
  fontWeight: 400,
  fontSize: 16,
  color: 'black',
  href: 'http://atls.team',
}

Link.argTypes = {
  children: {
    name: 'Контент',
    description: 'Основной контент, описание',
  },
  fontWeight: {
    name: 'Насыщенность шрифта',
    description: 'Насыщенность шрифта текста',
    control: {
      type: 'select',
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  fontSize: {
    name: 'Размер шрифта',
    description: 'Размер шрифта текста',
  },
  color: {
    name: 'Цвет текста',
    description: 'Цвет текста',
    control: {
      type: 'color',
    },
  },
}

NextLink.args = Link.args

NextLink.argTypes = Link.argTypes

NextNavLink.args = Link.args

NextNavLink.argTypes = Link.argTypes
