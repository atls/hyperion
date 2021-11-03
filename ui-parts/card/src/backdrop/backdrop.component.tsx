import React                  from 'react'
import { FC }                 from 'react'
import { useEffect }          from 'react'
import styled                 from '@emotion/styled'
import { motion }             from 'framer-motion'
import { useAnimation }       from 'framer-motion'

import { baseBackdropStyles } from './backdrop.styles'
import { BackdropProps }      from './backdrop.interface'

const BackdropBase = styled(motion.div)(baseBackdropStyles)

const Backdrop: FC<BackdropProps> = ({ children, opened, onClick }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.set({ display: 'none' })
  }, [controls])

  useEffect(() => {
    if (opened) {
      controls.set({ display: 'flex' })
      controls.start({ opacity: 1 })
    }

    if (!opened) controls.start({ opacity: 0 }).then(() => controls.set({ display: 'none' }))
  }, [opened, controls])

  return (
    <BackdropBase animate={controls} onClick={onClick}>
      {children}
    </BackdropBase>
  )
}

export { Backdrop }
