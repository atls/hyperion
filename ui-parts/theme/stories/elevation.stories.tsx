import type { Meta }                from '@storybook/react'
import type { StoryObj }            from '@storybook/react'

import type { ElevationStoryProps } from './interfaces.js'

import { darkTheme }                from '@atls-ui/theme'
import { lightTheme }               from '@atls-ui/theme'

import { roles }                    from './constants.js'
import { states }                   from './constants.js'

const meta: Meta<ElevationStoryProps> = {
  title: 'Theme/Elevation',
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
    const surface = themeName === 'light' ? theme.colors.surface.soft : theme.colors.surface.muted

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
            gridTemplateColumns: `80px repeat(${states.length}, minmax(140px, 1fr))`,
            gap: '32px',
            alignItems: 'center',
          }}
        >
          <div />
          {states.map((state) => (
            <strong key={state}>{state}</strong>
          ))}

          {roles.map((role) => (
            <div key={role} style={{ display: 'contents' }}>
              <strong>{role}</strong>
              {states.map((state) => (
                <div
                  key={`${role}-${state}`}
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    minHeight: '112px',
                    padding: '24px',
                    borderRadius: '16px',
                    color: theme.colors.text.primary,
                    background: surface,
                    boxShadow: theme.elevations[role][state],
                  }}
                >
                  Surface
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            width: 'min(480px, 100%)',
            marginTop: '64px',
            padding: '32px',
            borderRadius: '16px',
            color: theme.colors.text.primary,
            background: surface,
            boxShadow: theme.elevations.modal.default,
          }}
        >
          <strong>modal</strong>
          <p style={{ marginBottom: 0 }}>Overlay surface</p>
        </div>
      </div>
    )
  },
}

export default meta

export const Elevation: StoryObj<ElevationStoryProps> = {}
