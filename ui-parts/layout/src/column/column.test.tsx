/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'

import React      from 'react'

import { Column } from './column.component'

describe('Column component', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(<Column />)
      expect(asFragment()).toMatchSnapshot()
    })
  })

  it('applies default styles', () => {
    const { container } = render(<Column />)
    const columnElement = container.firstChild as HTMLElement

    const computedStyles = window.getComputedStyle(columnElement)
    expect(computedStyles.getPropertyValue('box-sizing')).toBe('border-box')
    expect(computedStyles.getPropertyValue('flex-direction')).toBe('column')
    expect(computedStyles.getPropertyValue('display')).toBe('flex')
    expect(computedStyles.getPropertyValue('height')).toBe('100%')
  })

  it('applies fill styles when fill prop is true', () => {
    const { container } = render(<Column fill />)
    const boxElement = container.firstChild as HTMLElement

    const computedStyles = window.getComputedStyle(boxElement)
    expect(computedStyles.getPropertyValue('width')).toBe('100%')
    expect(computedStyles.getPropertyValue('height')).toBe('100%')
  })

  it('applies fullViewportHeight styles when fullViewportHeight prop is true', () => {
    const { container } = render(<Column fullViewportHeight />)
    const boxElement = container.firstChild as HTMLElement

    const computedStyles = window.getComputedStyle(boxElement)
    expect(computedStyles.getPropertyValue('height')).toBe('100vh')
  })

  it('applies fullViewportWidth styles when fullViewportWidth prop is true', () => {
    const { container } = render(<Column fullViewportWidth />)
    const boxElement = container.firstChild as HTMLElement

    const computedStyles = window.getComputedStyle(boxElement)
    expect(computedStyles.getPropertyValue('width')).toBe('100vw')
  })
})
