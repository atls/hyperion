import onClickOutside from 'react-onclickoutside'
import { ReactNode }  from 'react'

interface OnOutsideInterface {
  children: ReactNode
  target: any
  onOutsideClick: (event: MouseEvent) => void
}

const OnOutsideClick: any = ({
  children,
  target,
  onOutsideClick,
}: OnOutsideInterface): ReactNode => {
  OnOutsideClick.handleClickOutside = (event) => {
    if (target && target.contains(event.target)) {
      return
    }
    if (onOutsideClick) {
      onOutsideClick(event)
    }
  }

  return children
}

const clickOutsideConfig = {
  handleClickOutside: () => OnOutsideClick.handleClickOutside,
}

export default onClickOutside<any, OnOutsideInterface>(OnOutsideClick, clickOutsideConfig)
