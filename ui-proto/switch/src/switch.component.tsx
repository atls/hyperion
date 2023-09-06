import styled                      from '@emotion/styled'

import React                       from 'react'
import { useRef }                  from 'react'
import { useHover }                from 'react-laag'

import { HandleElement }           from '@atls-ui-parts/switch'
import { ThumbElement }            from '@atls-ui-parts/switch'
import { thumbMotionVariants }     from '@atls-ui-parts/switch'
import { baseHandleStyles }        from '@atls-ui-parts/switch'
import { useSwitch }               from '@atls-ui-parts/switch'
import { baseThumbStyles }         from '@atls-ui-parts/switch'
import { ifDisabledThumbModifier } from '@atls-ui-parts/switch'

import { ToggleProps }             from './switch.interfaces'
import { ToggleSize }              from './switch.interfaces'
import { appearanceHandleStyles }  from './switch.styles'
import { appearanceThumbStyles }   from './switch.styles'
import { shapeThumbStyles }        from './switch.styles'
import { shapeHandleStyles }       from './switch.styles'

const Thumb = styled(ThumbElement)<{ size?: ToggleSize }>(
  baseThumbStyles,
  appearanceThumbStyles,
  shapeThumbStyles,
  ifDisabledThumbModifier()
)

const Element = styled(HandleElement)(baseHandleStyles, appearanceHandleStyles, shapeHandleStyles)

const Switch = ({ disabled, checked: defaultValue, onChange, size }: ToggleProps) => {
  const node = useRef<HTMLButtonElement>(null)
  const [hover, hoverProps] = useHover()
  const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

  return (
    <Element
      ref={node}
      checked={checked}
      onClick={setChecked}
      size={size}
      hover={hover}
      {...hoverProps}
    >
      <Thumb
        disabled={disabled}
        checked={checked}
        size={size}
        variants={{
          ...thumbMotionVariants,
        }}
      />
    </Element>
  )
}

export { Switch }
