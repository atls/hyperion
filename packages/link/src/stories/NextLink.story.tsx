import React        from 'react'

import { Text }     from '@atlantis-lab/text'

import { NextLink } from '..'

export const ExampleNextLink = () => (
  <NextLink href='/'>
    <Text color='red' fontSize='60px' fontWeight={700}>
      Nowhere
    </Text>
  </NextLink>
)

export default {
  title: 'Link',
  component: ExampleNextLink,
}
