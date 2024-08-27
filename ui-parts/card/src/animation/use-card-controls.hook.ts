import { useEffect }            from 'react'
import { useState }             from 'react'
import { useRef }               from 'react'

import { getContentDimensions } from '@atls-ui-parts/dom'

import { UseCardControlsProps } from './use-card-controls.interfaces.js'

const doNothing = () => {
  // do nothing
}

export const useCardControls = ({
  topOffset = 0,
  duration = 0.5,
  isOpen = false,
  scrollThreshold = false,
  onClose = () => {
    // do nothing
  },
}: UseCardControlsProps) => {
  const [windowHeight, setWindowHeight] = useState<number>(0)
  const [cardHeight, setCardHeight] = useState<number>(0)
  const [opened, setOpened] = useState<boolean>(isOpen)
  const cardNode = useRef(null)

  const isScrolled = useRef<boolean>(false)

  const show = () => setOpened(true)
  const hide = () => {
    isScrolled.current = false
    setOpened(false)
    onClose()
  }
  const toggle = () => (opened ? hide() : show())

  const slideInPosition =
    windowHeight - cardHeight >= topOffset ? windowHeight - cardHeight : topOffset

  const updateWindowHeight = () => {
    setWindowHeight(window.innerHeight)
  }

  const onScrollToThreshold = () => {
    const scrollPosition = (cardNode.current as any).getBoundingClientRect().y

    isScrolled.current = true

    if (scrollPosition >= slideInPosition) {
      hide()
    }
  }

  const onCloseBeforeScroll = ({ deltaY }: { deltaY: number }) => {
    if (!isScrolled && deltaY < 0) {
      hide()
    }
  }

  useEffect(() => {
    updateWindowHeight()

    document.addEventListener('resize', updateWindowHeight)

    return () => document.removeEventListener('resize', updateWindowHeight)
  }, [])

  useEffect(() => {
    if (cardNode?.current) {
      setCardHeight(getContentDimensions(cardNode.current).height)
    }
  }, [])

  const cardProps = {
    animate: { y: slideInPosition },
    exit: { y: windowHeight },
    initial: { y: windowHeight },
    transition: { duration },
    ref: cardNode,
    key: 'card-container',
  }

  const backdropProps = {
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    initial: { opacity: 0 },
    transition: { duration },
    key: 'card-backdrop',
  }

  const rendererProps = {
    opened,
    onScroll: scrollThreshold ? onScrollToThreshold : doNothing,
    onWheel: scrollThreshold ? onCloseBeforeScroll : doNothing,
  }

  const triggerProps = {
    onClick: toggle,
  }

  return { cardProps, backdropProps, rendererProps, triggerProps, show, hide, toggle, opened }
}
