import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '8px',
    height: '8px',
    margin: '5px',
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: '#aeb7be',
    '&:hover': {
      backgroundColor: '#000000',
    },
  },
  active: {
    backgroundColor: '#000000',
  },
})

const Dot = ({ active, onClick }) => (
  <div
    className={styles({ active })}
    onClick={onClick}
  />
)

export default Dot
