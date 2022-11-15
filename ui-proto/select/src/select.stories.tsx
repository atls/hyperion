import React        from 'react'
import { useState } from 'react'

import { Select }   from './select.component'

export default {
  title: 'Components/Select',
}

export const Base = () => {
  const [value, setValue] = useState<string>('')
  const [items] = useState<string[]>(['item1', 'item2', 'item3'])

  return <Select placeholder='open' items={items} value={value} onChange={setValue} />
}
