import styled                from '@emotion/styled'

import React                 from 'react'

import { Text }              from '@atls-ui-proto/text'
import { createBaseStyles }  from '@atls-ui-parts/link'
import { createNextLink }    from '@atls-ui-parts/link'
import { createNextNavLink } from '@atls-ui-parts/link'

export default {
  title: 'Components/Link',
}

const BaseLink = styled(Text.withComponent('a'))<{ active: boolean }>(createBaseStyles(), ({
  active,
}) => ({
  color: active ? 'blue' : 'black',
}))

export const Link = (props) => <BaseLink {...props} />

export const NextLink = (props) => {
  const NextLinkRenderer: any = createNextLink(BaseLink)
  return <NextLinkRenderer {...props} />
}

export const NextNavLink = (props) => {
  const NextNavLinkRenderer: any = createNextNavLink(BaseLink)
  return <NextNavLinkRenderer {...props} />
}

Link.args = {
  children: 'Clickable',
  fontWeight: 400,
  fontSize: 16,
  color: 'black',
  href: 'http://atls.team',
  path: '/',
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
