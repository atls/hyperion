import { style } from '@vanilla-extract/css'

export const storyTriggerStyles = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 32,
  padding: '0px 16px',
  color: 'rgba(0, 0, 0, 0.65)',
  backgroundColor: '#fff',
  border: '1px solid #d9d9d9',
  cursor: 'pointer',
})

export const storyContainerStyles = style({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 100,
  minHeight: 64,
  padding: 10,
  margin: 0,
  backgroundColor: 'rgba(255, 255, 255, 1)',
  boxShadow: '0px 2px 24px rgba(0, 0, 0, 0.15)',
  borderRadius: '8px',
  zIndex: 1000,
})

export const storyContainerCloseStyles = style({
  cursor: 'pointer',
  color: '#1890ff',
})
