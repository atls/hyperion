import type { UseCardControlsProps } from './use-card-controls.interfaces.js'

import { useEffect }                 from 'react'
import { useState }                  from 'react'
import { useRef }                    from 'react'

import { getContentDimensions }      from '@atls-ui-parts/dom'

const doNothing = (): void => {
  // do nothing
}

// eslint-disable-next-line
export const useCardControls = ({
  topOffset = 0,
  duration = 0.5,
  isOpen = false,
  scrollThreshold = false,
  onClose = (): void => {
    // do nothing
  },
}: UseCardControlsProps) => {
  const [windowHeight, setWindowHeight] = useState<number>(0)
  const [cardHeight, setCardHeight] = useState<number>(0)
  const [opened, setOpened] = useState<boolean>(isOpen)
  const cardNode = useRef<HTMLDivElement>(null)

  const isScrolled = useRef<boolean>(false)

  const show = (): void => {
    setOpened(true)
  }
  const hide = (): void => {
    isScrolled.current = false
    setOpened(false)
    onClose()
  }
  const toggle = (): void => {
    if (opened) hide()
    else show()
  }

  const slideInPosition =
    windowHeight - cardHeight >= topOffset ? windowHeight - cardHeight : topOffset

  const updateWindowHeight = (): void => {
    setWindowHeight(window.innerHeight)
  }

  const onScrollToThreshold = (): void => {
    if (cardNode.current) {
      const scrollPosition = cardNode.current.getBoundingClientRect().y

      isScrolled.current = true

      if (scrollPosition >= slideInPosition) {
        hide()
      }
    }
  }

  const onCloseBeforeScroll = ({ deltaY }: { deltaY: number }): void => {
    if (!isScrolled && deltaY < 0) {
      hide()
    }
  }

  useEffect(() => {
    updateWindowHeight()

    document.addEventListener('resize', updateWindowHeight)

    return (): void => {
      document.removeEventListener('resize', updateWindowHeight)
    }
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
