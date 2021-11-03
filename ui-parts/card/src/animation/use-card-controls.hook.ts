/* eslint-disable react-hooks/exhaustive-deps */

import { useAnimation }         from 'framer-motion'
import { useEffect }            from 'react'
import { useState }             from 'react'
import { useRef }               from 'react'

import { getContentDimensions } from '@atls-ui-parts/dom'

interface UseCardControlsArgs {
  onClose?: () => any
  fill?: boolean
  topOffset?: number
}

const useCardControls = ({
  fill = false,
  onClose = () => {},
  topOffset = 0,
}: UseCardControlsArgs) => {
  const [windowHeight, setWindowHeight] = useState<number>(0)
  const [opened, setOpened] = useState<boolean>(false)
  const containerNode = useRef(null)
  const controls = useAnimation()

  let cardHeight
  let visiblePosition

  const updateWindowHeight = () => {
    setWindowHeight(window.innerHeight)
  }

  const close = () => {
    setOpened(false)
    onClose()
  }

  const show = () => {
    if (fill) {
      visiblePosition = windowHeight - cardHeight
    }

    if (!fill) {
      visiblePosition = topOffset
    }

    controls.set({ visibility: 'visible' })
    controls.start({ y: visiblePosition })
  }

  const hide = () => {
    controls.start({ y: windowHeight }).then(() => {
      controls.set({ visibility: 'hidden' })
    })
    close()
  }

  useEffect(() => {
    updateWindowHeight()

    document.addEventListener('resize', updateWindowHeight)

    controls.set({ y: windowHeight })
  }, [controls, windowHeight])

  useEffect(() => {
    cardHeight = getContentDimensions(containerNode.current as any).height

    if (opened) {
      show()
    }
    if (!opened) {
      hide()
    }
  }, [controls, opened, windowHeight])

  const onScrollToThreshold = () => {
    const scrollPosition = (containerNode.current as any).getBoundingClientRect().y

    if (scrollPosition >= visiblePosition) {
      hide()
    }
  }

  return {
    opened,
    setOpened,
    controls,
    containerNode,
    show,
    hide,
    onScrollToThreshold,
  }
}

export { useCardControls }
