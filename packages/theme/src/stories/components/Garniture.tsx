import React               from 'react'

import { Container, Text } from '@atlantis-lab/design'

export const Garniture = ({ name, family, weight }) => (
  <Container flexDirection='row' mr={20} my={10}>
    <Text mt='10px' fontSize='25px' fontFamily={family} fontWeight={weight} lineHeight='normal'>
      {name}
    </Text>
  </Container>
)
