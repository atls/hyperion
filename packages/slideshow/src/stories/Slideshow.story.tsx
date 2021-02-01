import React           from 'react'

import { Column, Row } from '@atlantis-lab/layout'

import { Slideshow }   from '../index'

export const ExampleSlideshow = ({ time, transition = '.5s', controlsType }) => (
  <Column>
    <Row>
      <Slideshow time={time} transition={transition} controlsType={controlsType} width='10%'>
        <h1>Child 1 Child 1 Child 1 Child 1 Child 1 </h1>
        <h1>Child 2 Child 2 Child 2 Child 2 Child 2 Child 2 </h1>
        <h1>Child 3</h1>
      </Slideshow>
    </Row>
    <Row>
      <h1>An element</h1>
    </Row>
  </Column>
)

export default {
  title: 'Slideshow',
  component: Slideshow,
}
