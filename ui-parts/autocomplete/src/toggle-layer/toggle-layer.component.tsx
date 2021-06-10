import React                                      from 'react'
import { ToggleLayer as BaseToggleLayer, anchor } from 'react-laag'

const ToggleLayer = (props) => <BaseToggleLayer {...props} />

ToggleLayer.defaultProps = {
  placement: {
    anchor: anchor.BOTTOM_LEFT,
    autoAdjust: true,
    snapToAnchor: true,
    possibleAnchors: [anchor.BOTTOM_LEFT, anchor.TOP_LEFT],
    triggerOffset: 0,
  },
}

export { ToggleLayer }
