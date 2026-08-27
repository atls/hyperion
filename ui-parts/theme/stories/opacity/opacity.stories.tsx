import type { Meta }              from '@storybook/react'
import type { StoryObj }          from '@storybook/react'

import type { OpacityStoryProps } from './interfaces.js'

import { darkTheme }              from '@atls-ui/theme'
import { lightTheme }             from '@atls-ui/theme'
import { opacity }                from '@atls-ui/theme/tokens'

import { opacityNames }           from './constants.js'

const meta: Meta<OpacityStoryProps> = {
  title: 'Theme/Opacity',
  args: {
    theme: 'light',
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
  render: ({ theme: themeName }) => {
    const theme = themeName === 'light' ? lightTheme : darkTheme

    return (
      <div
        style={{
          minHeight: '100vh',
          padding: '48px',
          color: theme.colors.text.primary,
          background: theme.colors.surface.base,
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '24px',
          }}
        >
          {opacityNames.map((name) => (
            <div key={name}>
              <div style={{ marginBottom: '12px' }}>
                <strong>{name}</strong>
                <span style={{ marginLeft: '8px', color: theme.colors.text.secondary }}>
                  {opacity[name] * 100}%
                </span>
              </div>
              <div
                style={{
                  position: 'relative',
                  minHeight: '120px',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  background: theme.colors.surface.muted,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: theme.colors.action.base,
                    opacity: opacity[name],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
}

export default meta

export const Opacity: StoryObj<OpacityStoryProps> = {}
