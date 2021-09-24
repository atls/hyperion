import React      from 'react'
import styled     from '@emotion/styled'

import * as icons from './index'

const Meta = styled.div(({ theme }: any) => ({
  color: theme.base === 'dark' ? '#fff' : '#666',
  fontSize: '12px',
  fontFamily: 'Rubik',
}))

const Item = styled.li({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  flex: '0 1 20%',
  minWidth: '120px',
  padding: '0px 7.5px 20px',
  svg: {
    marginRight: '10px',
    width: '24px',
    height: '24px',
  },
})

const List = styled.ul({
  display: 'flex',
  flexFlow: 'row wrap',
  listStyle: 'none',
})

export default {
  title: 'Компоненты/Иконки',
}

export const labels = () => (
  <List>
    {Object.keys(icons).map(key => {
      const Icon = icons[key]

      return (
        <Item key={key}>
          <Icon />
          <Meta>{key}</Meta>
        </Item>
      )
    })}
  </List>
)

labels.story = {
  name: 'Список',
}
