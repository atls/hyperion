import { createElement } from 'react'

import styled            from '@emotion/styled'
import { useTheme }      from '@emotion/react'

import OnOutsideClick    from './OnOutsideClick'
import Option            from './Option'
import { OptionsProps }  from './types'

export const Component = styled.div(({ background, borderRadius }: any) => {
  const theme: any = useTheme()

  return {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '100%',
    padding: '8px 0',
    background: theme.colors[background],
    borderRadius: theme.radii[borderRadius],
    maxHeight: '160px',
    overflowX: 'hidden',
    overflowY: 'auto',
    boxShadow: '0 8px 24px 0 rgba(0, 0, 0, 0.1)',
  }
})

const Options = ({
  optionsBackground,
  optionsBorderRadius,
  optionFontSize,
  optionLineHeight,
  optionFontWeight,
  optionBackgroundColor,
  optionHoverBackgroundColor,
  optionActiveBackgroundColor,
  currency,
  valueField,
  displayField,
  options,
  activeValue,
  select,
  onSelect,
  onToggle,
}: OptionsProps) =>
  createElement(OnOutsideClick, {
    onOutsideClick: onToggle,
    target: select,
    children: createElement(
      Component,
      {
        background: optionsBackground,
        borderRadius: optionsBorderRadius,
      },
      options.map((option) =>
        createElement(Option, {
          key: option[valueField],
          currency,
          data: option,
          activeValue,
          valueField,
          displayField,
          onSelect,
          optionFontSize,
          optionLineHeight,
          optionFontWeight,
          optionBackgroundColor,
          optionHoverBackgroundColor,
          optionActiveBackgroundColor,
        }),
      ),
    ),
  })

export default Options
