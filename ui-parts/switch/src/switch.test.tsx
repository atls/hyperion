import { render } from '@testing-library/react'

import React      from 'react'

describe('Switchh component', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(<div />)

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
