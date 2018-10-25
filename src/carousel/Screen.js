import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
})

const Screen = ({ children, width, height }) => (
  <div
    className={styles()}
    style={{ width, height }}
  >
    {children}
  </div>
)

export default Screen
