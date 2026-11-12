import type { ReactNode }      from 'react'

import type { ContainerShape } from './styles/shape/interfaces.js'

export interface ContainerProps {
  shape: ContainerShape
  close?: ReactNode
  children?: ReactNode
  actions?: ReactNode
  loading?: boolean
  loader?: ReactNode
}
