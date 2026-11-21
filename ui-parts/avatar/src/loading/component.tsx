import type { LoadingProps } from './interfaces.js'

import { CircleProgress }    from '@atls-ui-parts/progress'

import { loadingStyles }     from './styles/base.css.js'
export const Loading = ({ shape, appearance, loader }: LoadingProps) => (
  <span className={loadingStyles} style={{ backgroundColor: appearance.backgroundColor }}>
    {loader === undefined ? (
      <CircleProgress shape={shape.progress} appearance={appearance.progress} />
    ) : (
      loader
    )}
  </span>
)
