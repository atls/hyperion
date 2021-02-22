import React from 'react'
import styled from '@emotion/styled'
import { border, layout, boxShadow, color } from 'styled-system'
import { Container } from '@atlantis-lab/design'
import { Text } from '@atlantis-lab/text'

const SampleBox = styled.div(layout, border, boxShadow, color)

SampleBox.defaultProps = {
  width: 130,
  height: 80,
}

export const Sample = ({ name = '', value = '', ...props }) => (
  <Container>
    <SampleBox {...props} />
    <Text mt='10px' fontWeight='medium'>
      {name}
    </Text>
    <Text mt='5px' color='stardust' fontSize='small'>
      {value}
    </Text>
  </Container>
)
