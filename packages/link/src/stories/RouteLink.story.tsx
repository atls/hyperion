import React            from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Text }         from '@atlantis-lab/text'

import { RouteLink }    from '..'

export const ExampleRouteLink = () => (
  <MemoryRouter>
    <RouteLink to='/'>
      <Text color='red' fontSize='60px' fontWeight={700}>
        Nowhere
      </Text>
    </RouteLink>
  </MemoryRouter>
)

export default {
  title: 'Link',
  component: ExampleRouteLink,
}
