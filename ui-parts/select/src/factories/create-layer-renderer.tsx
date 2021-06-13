import React               from 'react'
import { AnimatePresence } from 'framer-motion'

export const createLayerRenderer =
  () =>
  ({ isOpen, renderLayer, ...props }) =>
    renderLayer(<AnimatePresence>{isOpen && props.children}</AnimatePresence>)
