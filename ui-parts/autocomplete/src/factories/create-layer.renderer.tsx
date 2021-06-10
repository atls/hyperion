import React               from 'react'
import { AnimatePresence } from 'framer-motion'

const createLayerRenderer = Layer => ({ isOpen, layerProps, triggerRect, children }) => (
  <AnimatePresence>
    {isOpen && (
      <Layer ref={layerProps.ref} style={layerProps.style} width={triggerRect.width}>
        {children}
      </Layer>
    )}
  </AnimatePresence>
)

export { createLayerRenderer }
