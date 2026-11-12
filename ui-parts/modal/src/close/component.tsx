import type { ReactNode }  from 'react'

import type { CloseProps } from './interfaces.js'

import { clsx }            from 'clsx'

import { CrossIcon }       from '@atls-ui-parts/icons'

import { closeStyles }     from './styles/base.css.js'

export const Close = ({
  appearance,
  label,
  onClose,
  shape,
  icon,
  className,
}: CloseProps): ReactNode => (
  <button
    aria-label={label}
    className={clsx(closeStyles, className)}
    type='button'
    style={{ color: appearance.color, width: shape.size, height: shape.size }}
    onClick={onClose}
  >
    {icon === undefined ? <CrossIcon aria-hidden='true' width='100%' height='100%' /> : icon}
  </button>
)
