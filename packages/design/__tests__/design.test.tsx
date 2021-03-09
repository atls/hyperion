import React                                                         from 'react'
import renderer                                                      from 'react-test-renderer'

import { Column, Container, Layout, List, Row, Sample, Space, Text } from '../src'

describe('test suit for design', () => {
  it('should render Sample correctly', () => {
    const tree = renderer.create(<Sample />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Layout correctly', () => {
    const tree = renderer.create(<Layout />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render List correctly', () => {
    const tree = renderer.create(<List />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Space correctly', () => {
    const tree = renderer.create(<Space />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Text correctly', () => {
    const tree = renderer.create(<Text>Any text</Text>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Column correctly', () => {
    const tree = renderer.create(<Column>Inside column</Column>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Container correctly', () => {
    const tree = renderer.create(<Container>Contains</Container>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Row correctly', () => {
    const tree = renderer.create(<Row>Inside row</Row>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
