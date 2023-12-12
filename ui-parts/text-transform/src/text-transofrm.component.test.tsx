/**
 * @jest-environment jsdom
 */

import { render }        from '@testing-library/react'

import React             from 'react'

import { TextTransform } from './text-transform.component'

describe('TextTransform', () => {
  it('uppercase', () => {
    const { getByText } = render(<TextTransform upperCase>uppercase</TextTransform>)

    expect(getByText('UPPERCASE')).toBeDefined()
  })

  it('lowercase', () => {
    const { getByText } = render(<TextTransform lowerCase>LOWERCASE</TextTransform>)

    expect(getByText('lowercase')).toBeDefined()
  })

  it('firstletter', () => {
    const { getByText } = render(<TextTransform firstLetter>word</TextTransform>)

    expect(getByText('w')).toBeDefined()
  })

  it('lastletter', () => {
    const { getByText } = render(<TextTransform lastLetter>word</TextTransform>)

    expect(getByText('d')).toBeDefined()
  })

  it('replace', () => {
    const { getByText } = render(<TextTransform replace={['word', 'replaced']}>word</TextTransform>)

    expect(getByText('replaced')).toBeDefined()
  })

  it('substr', () => {
    const { getByText } = render(<TextTransform substr={[0, 1]}>word</TextTransform>)

    expect(getByText('w')).toBeDefined()
  })

  it('hideAfter', () => {
    const { getByText } = render(<TextTransform hideAfter={10}>long message</TextTransform>)

    expect(getByText('long messa...')).toBeDefined()
  })
})
