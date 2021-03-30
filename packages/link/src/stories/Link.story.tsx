import React    from 'react'

import { Text } from '@atlantis-lab/text'

import { Link } from '..'

export const ExampleLink = () => (
  <Link href='/'>
    <Text color='green' fontSize='60px' fontWeight={700}>
      Nowhere
    </Text>
  </Link>
)

export default {
  title: 'Link',
  component: ExampleLink,
}
