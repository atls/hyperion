import type { RefObject }               from 'react'

import type { CircleProgressAnimation } from './interfaces.js'

import { useEffect }                    from 'react'

import { MILLISECONDS_PER_SECOND }      from './constants.js'
import { STATIC_ANIMATION_DURATION }    from './constants.js'
import { segmentStart }                 from '../styles/base.css.js'
import { segmentLength }                from '../styles/base.css.js'
import { getSegmentKeyframes }          from './keyframes.js'

export const useAnimation = (
  ref: RefObject<SVGGElement | null>,
  animation: CircleProgressAnimation | undefined
): void => {
  useEffect(() => {
    const element = ref.current
    const view = element?.ownerDocument.defaultView
    if (!element || !view || !animation) return undefined
    const duration =
      Number.parseFloat(animation.duration) *
      (animation.duration.endsWith('ms') ? 1 : MILLISECONDS_PER_SECOND)
    const motion = view.matchMedia('(prefers-reduced-motion: reduce)')
    const players = Array.from(element.querySelectorAll('rect')).map((segment, index) =>
      segment.animate(
        getSegmentKeyframes(
          animation.segments[index].frames,
          { start: segmentStart, length: segmentLength },
          animation.easing
        ),
        {
          duration: duration > 0 ? duration : STATIC_ANIMATION_DURATION,
          iterations: Infinity,
          fill: 'both',
        }
      ))
    const update = (): void => {
      players.forEach((player) => {
        if (motion.matches || duration <= 0) {
          player.pause()
          player.currentTime = 0
        } else {
          player.play()
        }
      })
    }
    update()
    motion.addEventListener('change', update)
    return () => {
      players.forEach((player) => {
        player.cancel()
      })
      motion.removeEventListener('change', update)
    }
  }, [ref, animation])
}
