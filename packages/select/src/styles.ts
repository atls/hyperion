import { css } from '@emotion/css'

export const dropdownStyles = ({
  backgroundColor,
  borderRadius,
  maxHeight,
  color,
  itemHoverColor,
  fontFamily,
  fontWeight,
  fontSize,
}) => css`
  background-color: ${backgroundColor || '#fff'};
  border-radius: ${borderRadius || '4px'};
  box-shadow: 3px 24px 40px 0 rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  z-index: 100;
  position: absolute;
  outline: none;
  max-height: ${maxHeight || '150px'};
  overflow: scroll;
  cursor: pointer;
  &.rc-select-dropdown-hidden,
  &.rc-select-dropdown-hidden:empty {
    display: none;
  }
  .rc-select-dropdown-menu {
    outline: none;
    margin: 0;
    padding: 0;
    list-style: none;
    z-index: 9999;
    box-sizing: border-box;
    .rc-select-dropdown-menu-item {
      font-family: ${fontFamily || 'Inter'};
      font-weight: ${fontWeight || 600};
      font-size: ${fontSize || '12px'};
      padding: 9px 20px;
      color: ${color || '#99999999'};
      outline: none;
    }
    .rc-select-dropdown-menu-item.hidden {
      display: none;
    }
    .rc-select-dropdown-menu-item:first-of-type.hidden + .rc-select-dropdown-menu-item {
      padding-top: 19px;
    }
    .rc-select-dropdown-menu-item:last-of-type.hidden + .rc-select-dropdown-menu-item {
      padding-bottom: 19px;
    }
    .rc-select-dropdown-menu-item:first-of-type {
      padding-top: 19px;
    }
    .rc-select-dropdown-menu-item:last-of-type {
      padding-bottom: 19px;
    }
    .rc-select-dropdown-menu-item-active {
      color: ${itemHoverColor || '#bebebe'};
    }
  }
`
