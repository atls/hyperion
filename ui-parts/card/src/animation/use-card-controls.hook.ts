/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect }              from 'react'
import { useState }               from 'react'
import { useRef }                 from 'react'

import { getContentDimensions }   from '@atls-ui-parts/dom'

import { UseCardControlsOptions } from './animation.interfaces'

const doNothing = () => {
  // do nothing
}

const useCardControls = ({
  topOffset = 0,
  duration = 0.5,
  isOpen = false,
  scrollThreshold = false,
  onClose = doNothing,
}: UseCardControlsOptions) => {
  const [windowHeight, setWindowHeight] = useState<number>(0)
  const [cardHeight, setCardHeight] = useState<number>(0)
  const [opened, setOpened] = useState<boolean>(isOpen)
  const cardNode = useRef(null)

  let isScrolled = false

  const show = () => setOpened(true)
  const hide = () => {
    isScrolled = false
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

    if (!isScrolled) isScrolled = true

    if (scrollPosition >= slideInPosition) {
      hide()
    }
  }

  const onCloseBeforeScroll = ({ deltaY }) => {
    if (!isScrolled) {
      if (deltaY < 0) {
        hide()
      }
    }
  }

  useEffect(() => {
    updateWindowHeight()

    document.addEventListener('resize', updateWindowHeight)

    return () => document.removeEventListener('resize', updateWindowHeight)
  }, [])

  useEffect(() => {
    if (cardNode?.current) setCardHeight(getContentDimensions(cardNode.current).height)
  })

  const slideIn = {
    y: slideInPosition,
  }
  const slideOut = {
    y: windowHeight,
  }
  const appear = {
    opacity: 1,
  }
  const disappear = {
    opacity: 0,
  }

  const cardProps = {
    animate: slideIn,
    exit: slideOut,
    initial: slideOut,
    transition: { duration },
    ref: cardNode,
    key: 'card-container',
  }

  const backdropProps = {
    animate: appear,
    exit: disappear,
    initial: disappear,
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

export { useCardControls }
