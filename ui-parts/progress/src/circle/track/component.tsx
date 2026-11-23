import type { ReactNode }                from 'react'

import type { CircleProgressAnimation }  from '../indicator/animation/interfaces.js'
import type { CircleProgressAppearance } from '../styles/appearance/interfaces.js'

import { useId }                         from 'react'

import { Indicator }                     from '../indicator/component.js'
import { lineStyles }                    from './styles/track.css.js'
import { layerStyles }                   from './styles/track.css.js'
import { trackStyles }                   from './styles/track.css.js'

export const Track = ({
  appearance,
  value,
  animation,
}: {
  appearance: CircleProgressAppearance
  value?: number
  animation: CircleProgressAnimation
}): ReactNode => {
  const id = useId()
  const maskId = useId()
  return (
    <div aria-hidden='true' className={trackStyles}>
      <svg className={layerStyles} width='100cqw' height='100cqh'>
        <defs>
          <rect id={id} className={lineStyles} pathLength={1} />
          <mask id={maskId} x='0' y='0' width='1' height='1'>
            <Indicator href={`#${id}`} value={value} animation={animation} />
          </mask>
        </defs>
        <use href={`#${id}`} stroke={appearance.track.color} />
      </svg>
      <div
        className={layerStyles}
        style={{ background: appearance.indicator.background, maskImage: `url(#${maskId})` }}
      />
    </div>
  )
}
