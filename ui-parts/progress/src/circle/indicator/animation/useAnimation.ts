import type { RefObject }               from 'react'

import type { ContourGeometry }         from '../contour/interfaces.js'
import type { CircleProgressAnimation } from './interfaces.js'

import { useEffect }                    from 'react'
import { useRef }                       from 'react'

import { animations }                   from '@atls-ui/theme/tokens'

import { PROGRESS_MAX }                 from '../../constants.js'
import { MILLISECONDS_PER_SECOND }      from './constants.js'
import { TIMING_SAMPLE_DURATION }       from './constants.js'
import { contourPath }                  from '../contour/path.js'
import { resolveAnimationSegments }     from './resolveSegments.js'

export const useAnimation = (
  svgRef: RefObject<SVGSVGElement | null>,
  contourRef: RefObject<SVGRectElement | null>,
  pathRef: RefObject<SVGPathElement | null>,
  animation: CircleProgressAnimation,
  value: number | undefined,
  radius: string,
  strokeWidth: number | string,
  inset: string
): void => {
  const displayedValue = useRef<number | undefined>(value)
  useEffect(() => {
    const svg = svgRef.current
    const reference = contourRef.current
    const path = pathRef.current
    const view = svg?.ownerDocument.defaultView
    if (!svg || !reference || !path || !view) return undefined
    const duration =
      Number.parseFloat(animation.duration) *
      (animation.duration.endsWith('ms') ? 1 : MILLISECONDS_PER_SECOND)
    const transitionDuration = Number.parseFloat(animations.duration.md)
    const timing = new view.KeyframeEffect(null, [], {
      duration: TIMING_SAMPLE_DURATION,
      fill: 'both',
      easing: value === undefined ? (animation.easing ?? 'linear') : animations.easing.easeOut,
    })
    const easing = new view.Animation(timing, svg.ownerDocument.timeline)
    const ease = (progress: number): number => {
      easing.currentTime = progress
      return timing.getComputedTiming().progress ?? progress
    }
    const motion = view.matchMedia('(prefers-reduced-motion: reduce)')
    let geometry: ContourGeometry | undefined
    let frame: number | undefined
    let started = view.performance.now()
    let initialValue = displayedValue.current ?? value ?? 0
    const draw = (now: number): void => {
      if (!geometry) return
      if (value !== undefined) {
        const progress = motion.matches ? 1 : Math.min(1, (now - started) / transitionDuration)
        const current = initialValue + (value - initialValue) * ease(progress)
        displayedValue.current = current
        path.setAttribute(
          'd',
          contourPath(geometry, current > 0 ? [{ start: 0, end: current / PROGRESS_MAX }] : [])
        )
      } else {
        displayedValue.current = undefined
        const phase = motion.matches || duration <= 0 ? 0 : ((now - started) % duration) / duration
        path.setAttribute(
          'd',
          contourPath(geometry, resolveAnimationSegments(animation, phase, ease))
        )
      }
    }
    const tick = (now: number): void => {
      frame = undefined
      draw(now)
      if (
        !motion.matches &&
        (value === undefined ? duration > 0 : now - started < transitionDuration)
      )
        frame = view.requestAnimationFrame(tick)
    }
    const measure = (): void => {
      const bounds = reference.getBBox()
      const start = reference.getPointAtLength(0)
      geometry = {
        x: bounds.x,
        y: bounds.y,
        width: bounds.width,
        height: bounds.height,
        radius: start.x - bounds.x,
      }
      draw(view.performance.now())
    }
    const restart = (): void => {
      if (frame !== undefined) view.cancelAnimationFrame(frame)
      started = view.performance.now()
      initialValue = displayedValue.current ?? value ?? 0
      tick(started)
    }
    const observer = new view.ResizeObserver(measure)
    observer.observe(svg)
    measure()
    restart()
    motion.addEventListener('change', restart)
    return () => {
      if (frame !== undefined) view.cancelAnimationFrame(frame)
      observer.disconnect()
      motion.removeEventListener('change', restart)
      easing.cancel()
    }
  }, [animation, value, radius, strokeWidth, inset, svgRef, contourRef, pathRef])
}
