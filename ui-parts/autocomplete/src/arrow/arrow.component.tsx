import type { FC }         from 'react'

import type { ArrowProps } from './arrow.interfaces.js'

import { clsx }            from 'clsx'
import React               from 'react'

import { baseArrowStyles } from './arrow.css.js'
import { openArrowStyles } from './arrow.css.js'

export const Arrow: FC<ArrowProps> = ({ className, isOpen, ...props }) => (
  <svg
    className={clsx(className, baseArrowStyles, isOpen && openArrowStyles)}
    width={16}
    height={16}
    viewBox='0 0 16 16'
    {...props}
  >
    <path d='M4.281 6h7.438c.669 0 1.003.81.531 1.281L8.531 11a.747.747 0 01-1.059 0L3.75 7.281A.751.751 0 014.281 6z' />
  </svg>
)
