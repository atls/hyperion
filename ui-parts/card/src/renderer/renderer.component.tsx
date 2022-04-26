import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { useEffect }       from 'react'
import { useState }        from 'react'
import { createPortal }    from 'react-dom'

import { Container }       from './container'

const Renderer = ({ children, opened, ...props }) => {
  const [body, setBody] = useState(null)

  useEffect(() => {
    setBody(document.body)
  }, [])

  return (
    body &&
    createPortal(
      <AnimatePresence>{opened && <Container {...props}>{children}</Container>}</AnimatePresence>,
      body
    )
  )
}

export { Renderer }
