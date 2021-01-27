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
  const [vis, setVis] = useState(visible)

  return (
    <>
      <Modal visible={vis} opacity={opacity} onClose={() => setVis(!vis)}>
        {bigText ? (
          <h1>
            {(() => {
              let str = ''
              for (let i = 0; i < 5000; i += 1) {
                str += '| |'
              }
              return str
            })()}
          </h1>
        ) : (
          <h1>Modal</h1>
        )}
      </Modal>
      <h1 style={{ color: 'red' }}>
        {(() => {
          let str = ''
          for (let i = 0; i < 1500; i += 1) {
            str += '- -'
          }
          return str
        })()}
      </h1>
    </>
  )
}

export default {
  title: 'Modal',
  component: ExampleModal,
}
