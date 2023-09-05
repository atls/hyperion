import React            from 'react'
import { useState }     from 'react'

import { Autocomplete } from '@atls-ui-parts/autocomplete'

export default {
  title: 'Components/Autocomplete',
}

export const Base = () => {
  const options = [{ value: 'Louis' }, { value: 'Markus' }, { value: 'Armstrong' }]

  const [value, setValue] = useState({ value: '' })

  return (
    <div>
      <Autocomplete value={value} options={options} onChange={setValue} />
    </div>
  )
}
