/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta }      from '@storybook/react'
import type { StoryObj }  from '@storybook/react'

import type { ValueType } from './autocomplete.interfaces.js'

import { useEffect }      from 'react'
import { useState }       from 'react'

import { Column }         from '@atls-ui-parts/layout'
import { Layout }         from '@atls-ui-parts/layout'

import { Autocomplete }   from './autocomplete.component.js'

const meta: Meta = {
  title: 'Components/Autocomplete',
  tags: ['autodocs'],
}

export default meta

const options: Array<ValueType> = [{ value: 'Neptunium' }, { value: 'Plutonium' }]

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
        setInputOptions(options)
      } else {
        setInputOptions(
          options.filter((option) =>
            option.value.toLowerCase().startsWith(inputValue.toLowerCase()))
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
