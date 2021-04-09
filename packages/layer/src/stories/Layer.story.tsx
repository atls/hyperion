import React, { useState } from 'react'

import { Layer }           from '..'

export const ExampleLayer = ({ onClickOutside = true }: { onClickOutside: boolean }) => {
  const [active, setActive] = useState<boolean>(true)

  return (
    <>
      <button type='button'>Fake button</button>
      <Layer active={active} setActive={setActive} border='1px solid red' borderRadius='50' padding={100}>
        It wont disappear onClickInside
      </Layer>
      <button type='button' onClick={() => setActive(!active)}>
        Toggle layer
      </button>
    </>
  )
}

export default {
  title: 'Layer',
  component: ExampleLayer,
}
