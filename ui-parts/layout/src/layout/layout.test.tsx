/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'

import React      from 'react'

import { Layout } from './layout.component'

describe('Layout component', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(<Layout />)
      expect(asFragment()).toMatchSnapshot()
    })
  })

  it('applies default styles', () => {
    const { container } = render(<Layout />)
    const layoutElement = container.firstChild as HTMLElement

    const computedStyles = window.getComputedStyle(layoutElement)
    expect(computedStyles.getPropertyValue('display')).toBe('flex')
    expect(computedStyles.getPropertyValue('box-sizing')).toBe('border-box')
  })

  it('applies fill styles when fill prop is true', () => {
    const { container } = render(<Layout fill />)
    const boxElement = container.firstChild as HTMLElement

    const computedStyles = window.getComputedStyle(boxElement)
    expect(computedStyles.getPropertyValue('width')).toBe('100%')
    expect(computedStyles.getPropertyValue('height')).toBe('100%')
  })

  it('applies fullViewportHeight styles when fullViewportHeight prop is true', () => {
    const { container } = render(<Layout fullViewportHeight />)
    const boxElement = container.firstChild as HTMLElement

    const computedStyles = window.getComputedStyle(boxElement)
    expect(computedStyles.getPropertyValue('height')).toBe('100vh')
  })

  it('applies fullViewportWidth styles when fullViewportWidth prop is true', () => {
    const { container } = render(<Layout fullViewportWidth />)
    const boxElement = container.firstChild as HTMLElement

    const computedStyles = window.getComputedStyle(boxElement)
    expect(computedStyles.getPropertyValue('width')).toBe('100vw')
  })
})
