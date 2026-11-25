import { createVar }                    from '@vanilla-extract/css'

import { FLOW_TANGENT }                 from './constants.js'
import { FLOW_LENGTH_RULE }             from './constants.js'
import { FLOW_NUMBER_RULE }             from './constants.js'
import { paginationAnimationVariables } from './variables.css.js'

export const flowParameters = {
  leftEnd: createVar(FLOW_LENGTH_RULE),
  rightStart: createVar(FLOW_LENGTH_RULE),
  rightEnd: createVar(FLOW_LENGTH_RULE),
  leftBody: createVar(FLOW_LENGTH_RULE),
  rightBody: createVar(FLOW_LENGTH_RULE),
  neck: createVar(FLOW_LENGTH_RULE),
  leftTaper: createVar(FLOW_LENGTH_RULE),
  rightTaper: createVar(FLOW_LENGTH_RULE),
  leftRound: createVar(FLOW_NUMBER_RULE),
  rightRound: createVar(FLOW_NUMBER_RULE),
  leftWeight: createVar(FLOW_NUMBER_RULE),
  rightWeight: createVar(FLOW_NUMBER_RULE),
  joinedWeight: createVar(FLOW_NUMBER_RULE),
}

const {
  leftEnd,
  rightStart,
  rightEnd,
  leftBody,
  rightBody,
  neck,
  leftTaper,
  rightTaper,
  leftRound,
  rightRound,
}: Record<keyof typeof flowParameters, string> = flowParameters

export const flowRadius: string = `min(${paginationAnimationVariables.radius}, 50cqw, 50cqh)`
const leftRadius = `max(0px, min(calc(${flowRadius} * ${leftRound}), calc(${neck} - ${leftTaper}), calc(${leftEnd} - ${leftBody})))`
const rightRadius = `max(0px, min(calc(${flowRadius} * ${rightRound}), calc(${neck} - ${rightTaper}), calc(${rightBody} - ${rightStart})))`
const leftInner = `calc(${leftEnd} - ${leftRadius})`
const rightInner = `calc(${rightStart} + ${rightRadius})`
const leftInnerY = `calc(${neck} - ${leftRadius})`
const rightInnerY = `calc(${neck} - ${rightRadius})`
const bottom = (value: string): string => `calc(100% - ${value})`
const curve = (x: string, y: string, toX: string, toY: string): string =>
  `curve to ${toX} ${toY} with calc(${x} + (${toX} - ${x}) * ${FLOW_TANGENT}) ${y} / calc(${toX} - (${toX} - ${x}) * ${FLOW_TANGENT}) ${toY}`

const leftTop = `vline to ${flowRadius}, arc to ${flowRadius} 0% of ${flowRadius} cw,
  ${curve(flowRadius, '0%', leftBody, leftTaper)},
  ${curve(leftBody, leftTaper, leftInner, leftInnerY)},
  arc to ${leftEnd} ${neck} of ${leftRadius} cw`
const leftBottom = `arc to ${leftInner} ${bottom(leftInnerY)} of ${leftRadius} cw,
  ${curve(leftInner, bottom(leftInnerY), leftBody, bottom(leftTaper))},
  ${curve(leftBody, bottom(leftTaper), flowRadius, '100%')},
  arc to 0% calc(100% - ${flowRadius}) of ${flowRadius} cw, vline to 50%`

const rightTop = `arc to ${rightInner} ${rightInnerY} of ${rightRadius} cw,
  ${curve(rightInner, rightInnerY, rightBody, rightTaper)},
  ${curve(rightBody, rightTaper, `calc(${rightEnd} - ${flowRadius})`, '0%')},
  arc to ${rightEnd} ${flowRadius} of ${flowRadius} cw, vline to calc(100% - ${flowRadius}),
  arc to calc(${rightEnd} - ${flowRadius}) 100% of ${flowRadius} cw`
const rightBottom = `${curve(`calc(${rightEnd} - ${flowRadius})`, '100%', rightBody, bottom(rightTaper))},
  ${curve(rightBody, bottom(rightTaper), rightInner, bottom(rightInnerY))},
  arc to ${rightStart} ${bottom(neck)} of ${rightRadius} cw`

export const flowShapes = {
  left: `shape(from 0% 50%, ${leftTop}, vline to ${bottom(neck)}, ${leftBottom}, close)`,
  right: `shape(from ${rightStart} ${neck}, ${rightTop}, ${rightBottom}, close)`,
  joined: `shape(from 0% 50%, ${leftTop}, line to ${rightStart} ${neck}, ${rightTop}, ${rightBottom}, line to ${leftEnd} ${bottom(neck)}, ${leftBottom}, close)`,
  fill: `shape(from 0% 50%, ${leftTop}, vline to ${bottom(neck)}, ${leftBottom}, close,
    move to ${rightStart} ${neck}, ${rightTop}, ${rightBottom}, close)`,
}
