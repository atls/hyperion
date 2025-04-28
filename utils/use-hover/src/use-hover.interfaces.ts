import type { MouseEventHandler } from 'react'
import type { TouchEventHandler } from 'react'

export interface UseHoverProps {
  /**
   * Amount of milliseconds to wait while hovering before opening.
   * Default is `0`
   */
  delayEnter?: number
  /**
   * Amount of milliseconds to wait when mouse has left the trigger before closing.
   * Default is `0`
   */
  delayLeave?: number
  /**
   * Determines whether the layer should hide when the user starts scrolling.
   * Default is `true`
   */
  hideOnScroll?: boolean
}

export interface HoverProps {
  onMouseEnter: MouseEventHandler
  onMouseLeave: MouseEventHandler
  onTouchStart: TouchEventHandler
  onTouchMove: TouchEventHandler
  onTouchEnd: TouchEventHandler
}

export type UseHoverReturn = readonly [boolean, HoverProps, () => void]

export type Timeout = ReturnType<typeof setTimeout>
