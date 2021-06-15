import React, { useState }     from 'react'

import { Button }              from '@atls-ui-proto/button'
import { Column, Layout, Row } from '@atls-ui-parts/layout'

import { Circle }              from './circle'
import { Line }                from './line'

export default {
  title: 'Компоненты/Прогресс/Примеры',
}

export const Base = () => (
  <Column width={300}>
    <Layout>
      <Line percent={50} />
    </Layout>
    <Layout flexBasis={16} />
    <Layout width='100%'>
      <Circle percent={50} width={200} height={200} />
    </Layout>
  </Column>
)

Base.story = {
  name: 'Базовый',
}

export const Size = () => (
  <Column width={400}>
    <Layout>
      <Line percent={50} />
    </Layout>
    <Layout flexBasis={16} />
    <Layout>
      <Line percent={50} strokeWidth={15} />
    </Layout>
    <Layout flexBasis={16} />
    <Layout width='100%'>
      <Row alignItems='center' flexWrap='wrap'>
        <Layout>
          <Circle percent={30} width={50} height={50} />
        </Layout>
        <Layout flexBasis={16} />
        <Layout>
          <Circle percent={50} trailWidth={2} strokeWidth={12} width={100} height={100} />
        </Layout>
        <Layout flexBasis={16} />
        <Layout>
          <Circle percent={80} trailWidth={8} strokeWidth={15} width={150} height={150} />
        </Layout>
      </Row>
    </Layout>
  </Column>
)

Size.story = {
  name: 'Размеры',
}

export const Dinamic = () => {
  const [percent, setPercent] = useState(40)

  const increase = () => {
    let newPercent = percent + 10
    if (newPercent > 100) {
      newPercent = 100
    }
    setPercent(newPercent)
  }

  const decline = () => {
    let newPercent = percent - 10
    if (newPercent < 0) {
      newPercent = 0
    }
    setPercent(newPercent)
  }

  return (
    <Column width={400}>
      <Layout>
        <Line percent={percent} />
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Button onClick={() => decline()}>Отнять</Button>
        <Button onClick={() => increase()}>Прибавить</Button>
      </Layout>
      <Layout flexBasis={16} />
      <Layout width='100%'>
        <Circle percent={percent} width={200} height={200} />
      </Layout>
    </Column>
  )
}

Dinamic.story = {
  name: 'Изменить значение',
}

export const LineCap = () => (
  <Column width={400}>
    <Layout>
      <Line percent={40} strokeLinecap='round' trailLinecap='round' />
    </Layout>
    <Layout flexBasis={16} />
    <Layout>
      <Line percent={40} />
    </Layout>
    <Layout flexBasis={16} />
    <Layout width='100%'>
      <Row>
        <Layout>
          <Circle percent={40} strokeLinecap='round' width={150} height={150} />
        </Layout>
        <Layout flexBasis={16} />
        <Layout>
          <Circle percent={40} width={150} height={150} />
        </Layout>
      </Row>
    </Layout>
  </Column>
)

LineCap.story = {
  name: 'Форма на концах',
}

export const MultyLines = () => (
  <Column width={400}>
    <Layout>
      <Line percent={[20, 50, 100]} strokeColor={['#1890ff', '#52c41a', '#ff4d4f']} />
    </Layout>
    <Layout flexBasis={16} />
    <Layout width='100%'>
      <Circle
        percent={[33, 33, 34]}
        strokeLinecap='square'
        strokeColor={['#1890ff', '#52c41a', '#ff4d4f']}
        width={200}
        height={200}
      />
    </Layout>
  </Column>
)

MultyLines.story = {
  name: 'Несколько сегментов',
}

export const Gradient = () => (
  <Column width={400}>
    <Layout>
      <Line
        percent={[20, 50, 100]}
        strokeColor={[
          { direction: 'to left', from: 'purple', to: 'pink' },
          { '100%': '#108ee9', '0%': '#87d068' },
          { '0%': 'red', '100%': 'yellow' },
        ]}
      />
    </Layout>
    <Layout flexBasis={16} />
    <Layout width='100%'>
      <Circle
        percent={[33, 33, 34]}
        strokeColor={[
          { '0%': 'purple', '100%': 'pink' },
          { '0%': 'red', '100%': 'yellow' },
          { '100%': '#108ee9', '0%': '#87d068' },
        ]}
        width={200}
        height={200}
      />
    </Layout>
  </Column>
)

Gradient.story = {
  name: 'Градиенты',
}

export const CircleGap = () => (
  <Column width={400}>
    <Layout>
      <Circle percent={40} gapDegree={70} width={200} height={200} />
    </Layout>
    <Layout flexBasis={16} />
    <Layout width='100%'>
      <Circle percent={40} gapDegree={70} gapPosition='bottom' width={200} height={200} />
    </Layout>
  </Column>
)

CircleGap.story = {
  name: 'Разрыв круга',
}
