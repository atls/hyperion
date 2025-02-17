import type { RefObject } from 'react'

export interface UseCardControlsProps {
  topOffset?: number
  duration?: number
  isOpen?: boolean
  scrollThreshold?: boolean
  onClose?: VoidFunction
}

export interface CoordinateY {
  y: number
}

export interface CardProps {
  animate: CoordinateY
  exit: CoordinateY
  initial: CoordinateY
  transition: {
    duration: number
  }
  ref: RefObject<HTMLDivElement>
  key: string
}

export interface BackdropProps {
  animate: {
    opacity: number
  }
  exit: {
    opacity: number
  }
  initial: {
    opacity: number
  }
  transition: {
    duration: number
  }
  key: string
}

export interface RendererCardProps {
  opened: boolean
  onScroll: () => void
  onWheel: ({ deltaY }: { deltaY: number }) => void
}

export interface TriggerProps {
  onClick: () => void
}

export interface UseCardControlsReturn {
  cardProps: CardProps
  backdropProps: BackdropProps
  rendererProps: RendererCardProps
  triggerProps: TriggerProps
  show: () => void
  hide: () => void
  toggle: () => void
  opened: boolean
}
