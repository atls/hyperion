import React         from 'react'

import { Slideshow } from '../index'

export const ExampleSlideshow = ({ time, transition = '.5s', controlsType }) => (
  <Slideshow time={time} transition={transition} controlsType={controlsType}>
    <h1>Child 1</h1>
    <h1>Child 2</h1>
    <h1>Child 3</h1>
  </Slideshow>
)

export default {
  title: 'Slideshow',
  component: Slideshow,
}
