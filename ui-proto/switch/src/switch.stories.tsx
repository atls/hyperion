import React        from 'react'
import { useState } from 'react'

import { Switch }   from './switch.component'

export default {
  title: 'Components/Switch',
}

export const Base = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div>
      <Switch size='medium' checked={toggle} onChange={setToggle} />
    </div>
  )
}
