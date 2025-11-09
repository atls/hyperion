import type { ReactElement }          from 'react'
import type { ReactNode }             from 'react'

import React                          from 'react'

import { bottomNavigationRootStyles } from './bottom-navigation-root.styles.css.js'

export interface BottomNavigationRootProps {
  children?: ReactNode
}

export const BottomNavigationRoot = ({ children }: BottomNavigationRootProps): ReactElement => (
  <div className={bottomNavigationRootStyles}>{children}</div>
)
