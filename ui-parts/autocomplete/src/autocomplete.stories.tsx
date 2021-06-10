import React, { useEffect, useState } from 'react'

import { Autocomplete }               from '.'

export default {
  title: 'Компоненты/Выпадающий список/Примеры',
}

const options = [{ value: 'Neptunium' }, { value: 'Plutonium' }]

export const Base = () => (
  <div style={{ width: '100%', minHeight: 400, paddingTop: 40 }}>
    <Autocomplete options={options} />
  </div>
)

Base.story = {
  name: 'Базовое',
}

export const WithValue = () => {
  const [value, setValue] = useState({ value: 'Neptunium' })

  return (
    <div style={{ width: '100%', minHeight: 400, paddingTop: 40 }}>
      <Autocomplete value={value} options={options} onChange={setValue} />
    </div>
  )
}

WithValue.story = {
  name: 'С значением',
}

export const WithInputChange = () => {
  const [inputOptions, setInputOptions] = useState(options)
  const [value, setValue] = useState(null)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (!inputValue) {
      setInputOptions(options as any)
    } else {
      setInputOptions(
        options.filter((option) =>
          option.value.toLowerCase().startsWith(inputValue.toLowerCase())
        ) as any
      )
    }
  }, [inputValue])

  return (
    <div style={{ width: '100%', minHeight: 400, paddingTop: 40 }}>
      <Autocomplete
        value={value}
        options={inputOptions}
        onChange={setValue}
        onInputChange={setInputValue}
      />
    </div>
  )
}

WithInputChange.story = {
  name: 'С изменением значения',
}
