import RcSelect                              from 'rc-select'
import React                                 from 'react'
import { border, color, layout, typography } from 'styled-system'

import styled                                from '@emotion/styled'

import { dropdownStyles }                    from './styles'

const BaseSelect = ({
  children,
  showSearch = false,
  multiple = false,
  invalid = false,
  showArrow = true,
  backgroundColor,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  color,
  activeColor,
  fontSize,
  fontWeight,
  fontFamily,
  dropdownMaxHeight,
  borderRadius,
  ...props
}) =>
  React.createElement(
    RcSelect,
    {
      dropdownClassName: `${dropdownStyles({
        backgroundColor,
        color,
        activeColor,
        fontSize,
        fontWeight,
        fontFamily,
        maxHeight: dropdownMaxHeight,
        borderRadius,
      })}`,
      multiple,
      showSearch,
      showArrow,
      ...props,
    },
    children,
  )

export const Select = styled(BaseSelect)(
  ({ theme, placeholderColor, selectionColor, selectionBackgroundColor }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    outline: 'none',
    cursor: 'pointer',
    'ul li': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    '.rc-select-arrow': {
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      top: '0px',
      right: '20px',
    },

    ' &:hover .rc-select-arrow rect &.rc-select-focused .rc-select-arrow rect': {
      fill: '#000000',
    },

    '.rc-select-selection': {
      outline: 'none',
      userSelect: 'none',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      padding: '0 40px 5px 20px',
      '.rc-select-selection__rendered': {
        display: 'flex',
        alignItems: 'center',
        '.rc-select-selection__placeholder': {
          position: 'absolute',
          top: '50%',
          marginTop: '-7.5px',
          color: theme.colors[placeholderColor] || '#C0C0C0',
        },
      },
    },
    '.rc-select-selection__choice': {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.colors[selectionBackgroundColor] || '#f3f3f3',
      color: theme.colors[selectionColor] || '#000000',
      borderRadius: '4px',
      float: 'left',
      height: '30px',
      boxSizing: 'border-box',
      padding: '5px 10px 5px 15px',
      marginRight: '5px',
      marginTop: '5px',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'auto',
      '.rc-select-selection__choice__remove': {
        marginLeft: '10px',
        '.rc-select-selection__choice__remove-icon': {
          fontStyle: 'normal',
          color: '#9e9e9e',
          cursor: 'pointer',
          '&:hover': {
            color: '#000000',
          },
        },
      },
    },
    '.rc-select-search': {
      position: 'static',
      float: 'left',
      width: 'auto',
      maxWidth: '100%',
      padding: 0,
      marginTop: '5px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      '.rc-select-search__field': {
        border: 'none',
        fontSize: '16px',
        background: 'transparent',
        outline: '0px',
        width: '2px',
        padding: '0px',
        cursor: 'pointer',
        display: 'inline-block',
        '@media (max-width: 640px)': {
          display: 'none',
        },
      },
    },
    '.rc-select-selection-selected-value': {
      opacity: '1 !important',
      position: 'absolute',
      top: '50%',
      marginTop: '-7.5px',
    },
  }),
  border,
  color,
  typography,
  layout,
)
