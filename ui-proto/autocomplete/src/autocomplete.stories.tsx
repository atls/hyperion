import { Autocomplete } from '@atls-ui-parts/autocomplete'
import React            from 'react'
import { useState }     from 'react'

export default {
  title: 'Components/Autocomplete',
}

export const Base = () => {
  const options = [{ value: 'Louis' }, { value: 'Markus' }, { value: 'Armstrong' }]

  const [value, setValue] = useState({ value: '' })

  return (
    <div>
      <Autocomplete options={options} value={value} onChange={setValue}/>
    </div>
  )
}
