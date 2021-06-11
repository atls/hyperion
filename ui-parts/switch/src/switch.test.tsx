import React      from 'react'
import { render } from '@testing-library/react'

describe('Switchh component', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(<div />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
