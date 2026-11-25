import { keyframes }                    from '@vanilla-extract/css'

import { opacity }                      from '@atls-ui/theme/tokens'

import { flowParameters }               from './flow.css.js'
import { flowRadius }                   from './flow.css.js'
import { paginationAnimationVariables } from './variables.css.js'
import { borderShapeOpacity }           from './variables.css.js'

const { distance }: { distance: string } = paginationAnimationVariables
const strokeOpacity: string = borderShapeOpacity

export const flow = keyframes({
  'from, to': {
    vars: {
      [flowParameters.leftEnd]: '100cqw',
      [flowParameters.rightStart]: distance,
      [flowParameters.rightEnd]: `calc(${distance} + 100cqw)`,
      [flowParameters.leftBody]: `calc(100cqw - ${flowRadius})`,
      [flowParameters.rightBody]: `calc(${distance} + ${flowRadius})`,
      [flowParameters.neck]: '50cqh',
      [flowParameters.leftTaper]: '0px',
      [flowParameters.rightTaper]: '0px',
    },
  },
  from: {
    backgroundPositionX: `calc(${distance} * -1)`,
  },
  '9.09%': {
    vars: {
      [flowParameters.leftEnd]: `calc(64.7917cqw + ${distance} * 0.3521)`,
      [flowParameters.leftBody]: `calc(87.7067cqw + ${distance} * 0.1229)`,
      [flowParameters.leftTaper]: '4.17cqh',
    },
    backgroundPositionX: `calc(${distance} * -1)`,
  },
  '18.18%': {
    vars: {
      [flowParameters.leftEnd]: `calc(40.45cqw + ${distance} * 0.5955)`,
      [flowParameters.leftBody]: `calc(61.9242cqw + ${distance} * 0.3808)`,
      [flowParameters.leftTaper]: '7.0517cqh',
    },
    backgroundPositionX: `calc(${distance} * -1)`,
  },
  '27.27%': {
    vars: {
      [flowParameters.leftEnd]: `calc(26.975cqw + ${distance} * 0.7303)`,
      [flowParameters.rightStart]: `calc(16.0425cqw + ${distance} * 0.8396)`,
      [flowParameters.leftBody]: `calc(47.6517cqw + ${distance} * 0.5235)`,
      [flowParameters.rightBody]: `calc(2.4566cqw + ${distance})`,
      [flowParameters.neck]: '50cqh',
      [flowParameters.leftTaper]: '8.6483cqh',
      [flowParameters.rightTaper]: '4.8133cqh',
      [flowParameters.leftRound]: '1',
      [flowParameters.rightRound]: '1',
      [flowParameters.leftWeight]: '1',
      [flowParameters.rightWeight]: '1',
    },
    backgroundPositionX: `calc(${distance} * -0.9599)`,
  },
  '29.09%': {
    vars: {
      [flowParameters.leftEnd]: `calc(21.3483cqw + ${distance} * 0.7865)`,
      [flowParameters.rightStart]: `calc(21.3483cqw + ${distance} * 0.7865)`,
      [flowParameters.leftBody]: `calc(59.3342cqw + ${distance} * 0.4067)`,
      [flowParameters.rightBody]: `calc(6.2391cqw + ${distance})`,
      [flowParameters.neck]: '17.4933cqh',
      [flowParameters.leftTaper]: '9cqh',
      [flowParameters.rightTaper]: '6.5cqh',
      [flowParameters.leftRound]: '0',
      [flowParameters.rightRound]: '0',
      [flowParameters.joinedWeight]: '1',
    },
    backgroundPositionX: `calc(${distance} * -0.9349)`,
  },
  '40.00%': {
    vars: {
      [flowParameters.leftEnd]: `calc(49.8133cqw + ${distance} * 0.5019)`,
      [flowParameters.rightStart]: `calc(49.8133cqw + ${distance} * 0.5019)`,
      [flowParameters.leftBody]: '94.3019cqw',
      [flowParameters.rightBody]: `calc(5.8381cqw + ${distance})`,
      [flowParameters.neck]: '16.7067cqh',
      [flowParameters.leftTaper]: '2.1967cqh',
      [flowParameters.rightTaper]: '5.9083cqh',
      [flowParameters.joinedWeight]: '0.8537',
    },
    backgroundPositionX: `calc(${distance} * -0.697)`,
  },
  '50.91%': {
    vars: {
      [flowParameters.leftEnd]: `calc(57.4383cqw + ${distance} * 0.4256)`,
      [flowParameters.rightStart]: `calc(57.4383cqw + ${distance} * 0.4256)`,
      [flowParameters.leftBody]: '87.3437cqw',
      [flowParameters.rightBody]: `calc(7.0778cqw + ${distance})`,
      [flowParameters.neck]: '27.085cqh',
      [flowParameters.leftTaper]: '0cqh',
      [flowParameters.rightTaper]: '4.835cqh',
      [flowParameters.rightEnd]: `calc(100cqw + ${distance})`,
      [flowParameters.joinedWeight]: '0.5876',
    },
    backgroundPositionX: `calc(${distance} * -0.3881)`,
  },
  '74.55%': {
    vars: {
      [flowParameters.leftEnd]: `calc(53.8567cqw + ${distance} * 0.4614)`,
      [flowParameters.rightStart]: `calc(53.8567cqw + ${distance} * 0.4614)`,
      [flowParameters.leftBody]: '87.3437cqw',
      [flowParameters.rightBody]: `calc(9.7637cqw + ${distance})`,
      [flowParameters.neck]: '49.5683cqh',
      [flowParameters.leftTaper]: '0cqh',
      [flowParameters.rightTaper]: '2.5067cqh',
      [flowParameters.rightEnd]: `calc(104.4931cqw + ${distance})`,
      [flowParameters.joinedWeight]: '0.0111',
    },
    backgroundPositionX: `calc(${distance} * 0)`,
  },
  '76.36%': {
    vars: {
      [flowParameters.leftEnd]: `calc(65.125cqw + ${distance} * 0.3487)`,
      [flowParameters.rightStart]: `calc(46.3925cqw + ${distance} * 0.5361)`,
      [flowParameters.leftBody]: '87.3437cqw',
      [flowParameters.rightBody]: `calc(9.9703cqw + ${distance})`,
      [flowParameters.neck]: '50cqh',
      [flowParameters.leftTaper]: '0cqh',
      [flowParameters.rightTaper]: '2.3283cqh',
      [flowParameters.rightEnd]: `calc(104.4075cqw + ${distance})`,
      [flowParameters.rightRound]: '0',
      [flowParameters.leftWeight]: '0.2487',
      [flowParameters.rightWeight]: '0.1549',
    },
    backgroundPositionX: `calc(${distance} * 0)`,
  },
  '83.64%': {
    vars: {
      [flowParameters.leftEnd]: `calc(96.3717cqw + ${distance} * 0.0363)`,
      [flowParameters.leftBody]: '87.3437cqw',
      [flowParameters.rightStart]: `calc(18.285cqw + ${distance} * 0.8172)`,
      [flowParameters.rightBody]: `calc(10.7969cqw + ${distance})`,
      [flowParameters.rightTaper]: '1.6117cqh',
      [flowParameters.rightEnd]: `calc(101.9822cqw + ${distance})`,
      [flowParameters.rightRound]: '0.0284',
      [flowParameters.leftWeight]: '0.9236',
      [flowParameters.rightWeight]: '0.7196',
    },
  },
  '89.09%': {
    vars: {
      [flowParameters.leftEnd]: `calc(99.9892cqw + ${distance} * 0.0001)`,
      [flowParameters.leftBody]: '87.3437cqw',
      [flowParameters.leftRound]: '0',
    },
  },
  '90.91%': {
    vars: {
      [flowParameters.leftEnd]: '100cqw',
      [flowParameters.rightStart]: `calc(5.0925cqw + ${distance} * 0.9491)`,
      [flowParameters.leftBody]: `calc(100cqw - ${flowRadius})`,
      [flowParameters.rightBody]: `calc(11.6231cqw + ${distance})`,
      [flowParameters.neck]: '50cqh',
      [flowParameters.leftTaper]: '0cqh',
      [flowParameters.rightTaper]: '0.895cqh',
      [flowParameters.rightEnd]: `calc(100.0003cqw + ${distance})`,
      [flowParameters.rightRound]: '0.5752',
      [flowParameters.leftWeight]: '1',
      [flowParameters.rightWeight]: '0.9519',
      [flowParameters.leftRound]: '1',
    },
  },
  to: {
    backgroundPositionX: `calc(${distance} * 0)`,
  },
})

export const paint = keyframes({ 'from, to': { opacity: opacity.full } })

export const separateBorders = keyframes({
  'from, 27.27%': { opacity: strokeOpacity, animationTimingFunction: 'step-end' },
  '29.09%, 74.55%': { opacity: opacity.none, animationTimingFunction: 'step-end' },
  '76.36%, to': { opacity: strokeOpacity },
})

export const joinedBorder = keyframes({
  'from, 27.27%': { opacity: opacity.none, animationTimingFunction: 'step-end' },
  '29.09%, 74.55%': { opacity: strokeOpacity, animationTimingFunction: 'step-end' },
  '76.36%, to': { opacity: opacity.none },
})

export const hideSurface = keyframes({ 'from, to': { opacity: opacity.none } })
