import { WrappedComponentProps, injectIntl } from 'react-intl'
import { createElement }                     from 'react'

import styled                                from '@emotion/styled'
import { useTheme }                          from '@emotion/react'

import { OptionProps }                       from './types'
import { currency as getCurrency }           from './get'

export const Component = styled.div(
  ({
    isActive,
    fontSize,
    lineHeight,
    color,
    fontWeight,
    backgroundColor,
    hoverBackgroundColor,
    activeBackgroundColor,
  }: any) => {
    const theme: any = useTheme()

    return {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 16px 9px',
      boxSizing: 'border-box',
      fontSize: theme.fontSizes[fontSize],
      lineHeight: theme.lineHeights[lineHeight],
      color: theme.colors[color],
      fontWeight: theme.fontWeights[fontWeight],
      cursor: 'pointer',
      backgroundColor: isActive
        ? theme.colors[backgroundColor]
        : theme.colors[activeBackgroundColor],
      transition: 'background-color ease-in .1s, color ease-in .1s',
      ':hover': {
        backgroundColor: theme.colors[hoverBackgroundColor],
      },
    }
  },
)

const Option = ({
  activeValue,
  currency,
  intl,
  data,
  displayField,
  valueField,
  onSelect,
  optionFontSize,
  optionLineHeight,
  optionFontWeight,
  optionBackgroundColor,
  optionHoverBackgroundColor,
  optionActiveBackgroundColor,
}: OptionProps & WrappedComponentProps) =>
  createElement(
    Component,
    {
      onClick: () => onSelect(data),
      isActive: data[valueField] === activeValue[valueField],
      fontSize: optionFontSize,
      lineHeight: optionLineHeight,
      fontWeight: optionFontWeight,
      backgroundColor: optionBackgroundColor,
      hoverBackgroundColor: optionHoverBackgroundColor,
      activeBackgroundColor: optionActiveBackgroundColor,
    },
    currency ? getCurrency(data[displayField], intl) : data[displayField],
  )

export default injectIntl(Option)
