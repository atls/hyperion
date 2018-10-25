import React from 'react'
import { StyleSheet } from 'elementum'
import { Row, Layout } from 'flex-layouts'
import Dot from './Dot'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    display: 'flex',
    margin: '10px 0',
  },
})

const Dots = ({ active, children = [], onChange }) => (
  <div className={styles()}>
    <Row justify='center'>
      {children.map((child, index) => (
        <Layout key={index}>
          <Dot
            active={index === active}
            onClick={() => onChange(index)}
          />
        </Layout>
      ))}
    </Row>
  </div>
)

export default Dots
