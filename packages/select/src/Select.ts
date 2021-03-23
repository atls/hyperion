import { WrappedComponentProps }                      from 'react-intl'
import { createElement, useRef }                      from 'react'

import styled                                         from '@emotion/styled'
import { ArrowDownIcon }                              from '@atlantis-lab/icons'
import { Input }                                      from '@atlantis-lab/input'

import Options                                        from './Options'
import enhance                                        from './enhance'
import { SelectProps }                                from './types'
import { currency as getCurrency, value as getValue } from './get'

export const Wrapper = styled.div(({ disabled, toggled }: any) => ({
  position: 'relative',
  display: 'inline-flex',
  width: '100%',
  zIndex: toggled ? 3 : 1,
  '> svg': {
    position: 'absolute',
    top: '50%',
    right: 16,
    transform: `translateY(-50%) ${toggled ? 'rotate(0deg)' : 'rotate(180deg)'}`,
    cursor: 'pointer',
  },
  input: {
    cursor: disabled ? 'initial' : 'pointer',
  },
}))

const Select = ({
  optionsBackground,
  optionsBorderRadius,
  optionFontSize,
  optionLineHeight,
  optionFontWeight,
  optionBackgroundColor,
  optionHoverBackgroundColor,
  optionActiveBackgroundColor,
  value,
  currency,
  disabled,
  placeholder,
  options,
  valueField,
  displayField,
  toggle,
  toggled,
  onSelect,
  onToggle,
  onOpen,
  intl,
  ...inputProps
}: SelectProps & WrappedComponentProps) => {
  const selectRef = useRef()
  const inputValue = getValue(value, options, valueField, displayField)

  return createElement(
    Wrapper,
    {
      ref: selectRef,
      toggled,
      disabled,
      onClick: onToggle,
    },
    [
      createElement(Input, {
        key: 'input',
        disabled,
        readOnly: true,
        placeholder,
        height: '48px',
        width: '100%',
        padding: '0 20px 0 20px',
        border: 'input',
        fontWeight: 'normal',
        fontSize: 'default',
        lineHeight: 'medium',
        color: 'semiBlack',
        borderRadius: 'extra',
        value: currency ? getCurrency(inputValue, intl) : inputValue,
        ...inputProps,
      }),
      createElement(ArrowDownIcon, { key: 'icon', width: 13, height: 8 }),
      toggled &&
        createElement(Options, {
          key: 'options',
          currency,
          options,
          valueField,
          displayField,
          activeValue: value || {},
          select: selectRef.current,
          onToggle,
          onSelect,
          optionsBackground,
          optionsBorderRadius,
          optionFontSize,
          optionLineHeight,
          optionFontWeight,
          optionBackgroundColor,
          optionHoverBackgroundColor,
          optionActiveBackgroundColor,
        }),
    ],
  )
}

Select.defaultProps = {
  valueField: 'id',
  displayField: 'name',
  disabled: false,
  options: [],
}

export default enhance(Select)
