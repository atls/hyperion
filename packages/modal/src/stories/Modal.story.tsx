import React, { useState } from 'react'

import { Modal }           from '../index'

type ExampleProps = {
  visible: boolean
  opacity?: 'large' | 'small'
  bigText?: boolean
}

export const ExampleModal = ({
  visible = true,
  opacity = 'large',
  bigText = false,
}: ExampleProps) => {
  const [isVisible, setIsVisible] = useState(visible)

  return (
    <>
      <Modal visible={isVisible} opacity={opacity} onClose={() => setIsVisible(!isVisible)}>
        {bigText ? <h1>{'| |'.repeat(5000)}</h1> : <h1>Modal</h1>}
      </Modal>
      <h1 style={{ color: 'red' }}>{'- -'.repeat(1500)}</h1>
    </>
  )
}

export default {
  title: 'Modal',
  component: ExampleModal,
}
