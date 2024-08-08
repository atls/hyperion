/* eslint-disable react-hooks/rules-of-hooks */

import { Meta }         from '@storybook/react'
import { StoryObj }     from '@storybook/react'

import React            from 'react'
import { useEffect }    from 'react'
import { useState }     from 'react'

import { Column }       from '@atls-ui-parts/layout'
import { Layout }       from '@atls-ui-parts/layout'

import { Autocomplete } from './autocomplete.component.js'
import { ValueType }    from './autocomplete.interfaces.js'

const meta: Meta = {
  title: 'Components/Autocomplete',
  tags: ['autodocs'],
}

export default meta

const options: ValueType[] = [{ value: 'Neptunium' }, { value: 'Plutonium' }]

export const Base: StoryObj = {
  name: 'Базовый',
  render: () => (
    <Column fill alignItems='center'>
      <Layout flexBasis='40px' />
      <Autocomplete value={null} options={options} />
      <Layout flexBasis='40px' />
    </Column>
  ),
}

export const WithValue: StoryObj = {
  name: 'С значением',
  render: () => {
    const [value, setValue] = useState<ValueType | null>({ value: 'Neptunium' })

    return (
      <Column fill alignItems='center'>
        <Layout flexBasis='40px' />
        <Autocomplete value={value} options={options} onChange={setValue} />
        <Layout flexBasis='40px' />
      </Column>
    )
  },
}

export const WithInputChange: StoryObj = {
  name: 'С изменением значения',
  render: () => {
    const [inputOptions, setInputOptions] = useState(options)
    const [value, setValue] = useState<ValueType | null>(null)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
      if (!inputValue) {
        setInputOptions(options as any)
      } else {
        setInputOptions(
          options.filter((option) =>
            option.value.toLowerCase().startsWith(inputValue.toLowerCase())) as any
        )
      }
    }, [inputValue])

    return (
      <Column fill alignItems='center'>
        <Layout flexBasis='40px' />
        <Autocomplete
          value={value}
          options={inputOptions}
          onChange={setValue}
          onInputChange={setInputValue}
        />
        <Layout flexBasis='40px' />
      </Column>
    )
  },
}
