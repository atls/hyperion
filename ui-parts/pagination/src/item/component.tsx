import type { ReactNode }          from 'react'

import type { ItemProps }          from './interfaces.js'

import { assignInlineVars }        from '@vanilla-extract/dynamic'
import { clsx }                    from 'clsx'

import { Indicator }               from '../indicator/component.js'
import { itemAppearanceStyles }    from './styles/appearance/styles.css.js'
import { itemAppearanceVariables } from './styles/appearance/styles.css.js'
import { itemStyles }              from './styles/base.css.js'
import { itemSurfaceStyles }       from './styles/base.css.js'
import { itemFocusStyles }         from './styles/base.css.js'
import { itemWidth }               from './styles/shape/variables.css.js'

export const Item = ({
  selected,
  page,
  shape,
  appearance,
  animation,
  transition,
  className,
  indicatorClassName,
  indicatorAppearance,
  style,
  ...props
}: ItemProps): ReactNode => {
  const phase = selected ? 'enter' : 'leave'
  const moving =
    transition.from !== transition.to && (page === transition.from || page === transition.to)
  const colors = selected ? appearance.selected : appearance.unselected
  const surfaceAnimation = animation && moving ? animation.surface?.[phase] : undefined

  return (
    <button
      {...props}
      type='button'
      aria-current={selected ? 'page' : undefined}
      className={clsx(itemStyles, className)}
      style={{
        ...assignInlineVars({ [itemWidth]: shape.width }),
        minHeight: shape.hitAreaHeight,
        ...style,
      }}
    >
      <span
        key={surfaceAnimation ? `surface:${transition.from}:${transition.to}` : 'surface'}
        aria-hidden='true'
        className={clsx(itemSurfaceStyles, itemAppearanceStyles)}
        style={{
          ...assignInlineVars(itemAppearanceVariables, colors),
          height: shape.height,
          borderRadius: shape.borderRadius,
          borderWidth: shape.borderWidth,
          ...surfaceAnimation,
        }}
      />
      {animation && moving && (
        <Indicator
          key={`indicator:${transition.from}:${transition.to}`}
          phase={phase}
          animation={animation}
          distance={Math.abs(transition.to - transition.from)}
          direction={Math.sign(transition.to - transition.from)}
          background={indicatorAppearance?.background ?? appearance.selected.default.background}
          borderColor={indicatorAppearance?.borderColor ?? appearance.selected.default.borderColor}
          shape={shape}
          className={indicatorClassName}
        />
      )}
      <span
        aria-hidden='true'
        className={itemFocusStyles}
        style={{
          height: shape.height,
          borderRadius: shape.borderRadius,
          borderWidth: shape.borderWidth,
          borderColor: colors.focused.borderColor,
        }}
      />
    </button>
  )
}
