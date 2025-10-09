/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta }     from '@storybook/react'
import type { StoryObj } from '@storybook/react'

import { useState }      from 'react'

import { Button }        from '@atls-ui-parts/button'
import { Column }        from '@atls-ui-parts/layout'
import { Layout }        from '@atls-ui-parts/layout'
import { Row }           from '@atls-ui-parts/layout'

import { Circle }        from './circle/index.js'
import { Line }          from './line/index.js'

const meta: Meta = {
  title: 'Components/Progress',
  tags: ['autodocs'],
}

export default meta

export const Base: StoryObj = {
  name: 'Базовый',
  render: () => (
    <Column width='300px'>
      <Layout fill>
        <Line percent={50} />
      </Layout>
      <Layout flexBasis='16px' />
      <Layout width='100%'>
        <Circle percent={50} width='200px' height='200px' />
      </Layout>
    </Column>
  ),
}

export const Size: StoryObj = {
  name: 'Размеры',
  render: () => (
    <Column width='400px'>
      <Layout width='300px'>
        <Line percent={50} />
      </Layout>
      <Layout flexBasis='16px' />
      <Layout>
        <Line percent={50} strokeWeight={15} />
      </Layout>
      <Layout flexBasis='16px' />
      <Layout width='100%'>
        <Row alignItems='center' flexWrap='wrap'>
          <Layout>
            <Circle percent={30} width='50px' height='50px' />
          </Layout>
          <Layout flexBasis='16px' />
          <Layout>
            <Circle percent={50} trailWidth={2} strokeWeight={12} width='100px' height='100px' />
          </Layout>
          <Layout flexBasis='16px' />
          <Layout>
            <Circle percent={80} trailWidth={8} strokeWeight={15} width='150px' height='150px' />
          </Layout>
        </Row>
      </Layout>
    </Column>
  ),
}

export const Dinamic: StoryObj = {
  name: 'Изменить значение',
  render: () => {
    const [percent, setPercent] = useState(40)

    const increase = (): void => {
      const newPercent = percent + 10
      setPercent(newPercent < 100 ? newPercent : 100)
    }

    const decline = (): void => {
      const newPercent = percent - 10
      setPercent(newPercent > 0 ? newPercent : 0)
    }

    return (
      <Column width='400px'>
        <Layout>
          <Line percent={percent} />
        </Layout>
        <Layout flexBasis='16px' />
        <Layout>
          <Button size='small' onClick={decline}>
            Отнять
          </Button>
          <Button size='small' onClick={increase}>
            Прибавить
          </Button>
        </Layout>
        <Layout flexBasis='16px' />
        <Layout width='100%'>
          <Circle percent={percent} width='200px' height='200px' />
        </Layout>
      </Column>
    )
  },
}

export const LineCap: StoryObj = {
  name: 'Форма на концах',
  render: () => (
    <Column width='400px'>
      <Layout>
        <Line percent={40} strokeLinecap='round' trailLinecap='round' />
      </Layout>
      <Layout flexBasis='16px' />
      <Layout>
        <Line percent={40} />
      </Layout>
      <Layout flexBasis='16px' />
      <Layout width='100%'>
        <Row>
          <Layout>
            <Circle percent={40} strokeLinecap='round' width='150px' height='150px' />
          </Layout>
          <Layout flexBasis='16px' />
          <Layout>
            <Circle percent={40} width='150px' height='150px' />
          </Layout>
        </Row>
      </Layout>
    </Column>
  ),
}

export const MultyLines: StoryObj = {
  name: 'Несколько сегментов',
  render: () => (
    <Column width='400px'>
      <Layout>
        <Line percent={[20, 50, 100]} strokeColor={['$red', '$blueProtective', '$green']} />
      </Layout>
      <Layout flexBasis='16px' />
      <Layout width='100%'>
        <Circle
          percent={[33, 33, 34]}
          strokeLinecap='square'
          strokeColor={['#1890ff', '#52c41a', '#ff4d4f']}
          width='200px'
          height='200px'
        />
      </Layout>
    </Column>
  ),
}

export const Gradient: StoryObj = {
  name: 'Градиенты',
  render: () => (
    <Column width='400px'>
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
      <Layout flexBasis='16px' />
      <Layout width='100%'>
        <Circle
          percent={[33, 33, 34]}
          width='200px'
          height='200px'
          strokeColor={[
            { '0%': 'purple', '100%': 'pink' },
            { '0%': 'red', '100%': 'yellow' },
            { '100%': '#108ee9', '0%': '#87d068' },
          ]}
        />
      </Layout>
    </Column>
  ),
}

export const CircleGap: StoryObj = {
  name: 'Разрыв круга',
  render: () => (
    <Column width='400px'>
      <Layout>
        <Circle percent={40} gapDegree={70} width='200px' height='200px' />
      </Layout>
      <Layout flexBasis='16px' />
      <Layout width='100%'>
        <Circle percent={40} gapDegree={70} gapPosition='bottom' width='200px' height='200px' />
      </Layout>
    </Column>
  ),
}
