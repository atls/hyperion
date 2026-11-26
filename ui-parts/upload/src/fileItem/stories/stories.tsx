import type { Meta }     from '@storybook/react'
import type { StoryObj } from '@storybook/react'

import { useState }      from 'react'

import { FileItem }      from '../../index.js'
import { stageStyles }   from './styles.css.js'

const meta: Meta<typeof FileItem> = {
  title: 'Components/Upload/FileItem',
  component: FileItem,
  args: {
    style: { width: 200 },
    name: 'file.png',
    state: 'uploaded',
    progress: 40,
  },
  argTypes: {
    state: { control: 'select', options: ['loading', 'uploaded', 'error'] },
    progress: { control: { type: 'range', min: 0, max: 100 } },
    name: { control: 'text' },
    shape: { control: 'object' },
    removeAction: { control: false },
    removeIcon: { control: false },
    progressIndicator: { control: false },
  },
  render: function Render(args) {
    const [visible, setVisible] = useState(true)
    return (
      <div className={stageStyles}>
        {visible && (
          <FileItem
            {...args}
            onRemove={() => {
              args.onRemove?.()
              setVisible(false)
            }}
          />
        )}
      </div>
    )
  },
}
export default meta
export const Base: StoryObj<typeof meta> = {}
