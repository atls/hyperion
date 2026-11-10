import type { RefObject }               from 'react'

import type { LinearAnimationSegment }  from './interfaces.js'
import type { LinearProgressAnimation } from './interfaces.js'

import { useEffect }                    from 'react'

import { MILLISECONDS_PER_SECOND }      from './constants.js'

export const useAnimation = (
  ref: RefObject<HTMLDivElement | null>,
  animation: LinearProgressAnimation,
  segment: LinearAnimationSegment
): void => {
  useEffect(() => {
    const element = ref.current
    const view = element?.ownerDocument.defaultView
    if (!element || !view || !segment.frames.length) return undefined
    const duration =
      Number.parseFloat(animation.duration) *
      (animation.duration.endsWith('ms') ? 1 : MILLISECONDS_PER_SECOND)
    const media = view.matchMedia('(prefers-reduced-motion: reduce)')
    let player: Animation | undefined
    const update = (): void => {
      player?.cancel()
      if (duration <= 0) return
      player = element.animate(
        segment.frames.map(({ at, start, end }) => ({
          offset: at,
          left: `${start * 100}%`,
          width: `${(end - start) * 100}%`,
        })),
        { duration, easing: animation.easing ?? 'linear', iterations: Infinity }
      )
      if (media.matches) {
        player.pause()
        player.currentTime = duration / 2
      }
    }
    update()
    media.addEventListener('change', update)
    return () => {
      player?.cancel()
      media.removeEventListener('change', update)
    }
  }, [ref, animation, segment])
}
