import React                                   from 'react'

import { Link as LinkComponent }               from './index'
import { NextLink as NextLinkComponent }       from './index'
import { NextNavLink as NextNavLinkComponent } from './index'

export default {
  title: 'Components/Link',
}

export const Link = (props) => <LinkComponent {...props} />

export const NextLink = (props) => <NextLinkComponent {...props} />

export const NextNavLink = (props) => <NextNavLinkComponent {...props} />

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
