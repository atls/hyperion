import React                             from 'react'

import { Carousel as CarouselComponent } from './carousel.component'

export default {
  title: 'Components/Carousel',
}

export const Carousel = (props) => (
  <div style={{ width: 400, height: 300 }}>
    <CarouselComponent {...props} />
  </div>
)

Carousel.args = {
  children: [1, 2, 3, 4],
}
