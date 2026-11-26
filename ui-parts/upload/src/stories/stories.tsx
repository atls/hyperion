import type { Meta }          from '@storybook/react'
import type { StoryObj }      from '@storybook/react'

import type { FileItemState } from '../index.js'
import type { UploadProps }   from '../index.js'

import { useEffect }          from 'storybook/preview-api'
import { useRef }             from 'storybook/preview-api'
import { useState }           from 'storybook/preview-api'
import { useArgs }            from 'storybook/preview-api'

import { spacing }            from '@atls-ui/theme'

import { Upload }             from '../index.js'
import { FileItem }           from '../index.js'
import { DEMO_TICK }          from './constants.js'
import { DEMO_STEP }          from './constants.js'
import { COMPLETE }           from './constants.js'
import { REJECTION_LABEL }    from './constants.js'

const meta: Meta<UploadProps & { failUpload: boolean }> = {
  title: 'Components/Upload',
  component: Upload,
  args: {
    multiple: true,
    state: 'default',
    failUpload: false,
    accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg', '.jpeg'] },
  },
  argTypes: {
    state: { control: 'select', options: ['default', 'loading', 'error'] },
    multiple: { control: 'boolean' },
    failUpload: { control: 'boolean' },
    appearance: { control: 'select', options: ['default'] },
    shape: { control: 'object' },
    label: { control: 'text' },
  },
  render: function Render({ failUpload, ...args }) {
    const [, setArgs] = useArgs()
    const [rejectionLabel, setRejectionLabel] = useState<string | undefined>(undefined)
    const [files, setFiles] = useState<
      Array<{ id: string; name: string; progress: number; state: FileItemState }>
    >([])
    const nextId = useRef(0)
    useEffect(() => {
      if (!files.some((item) => item.state === 'loading')) return undefined
      const timer = setInterval(() => {
        setFiles((items) =>
          items.map((item) => {
            if (item.state !== 'loading') return item
            const progress = Math.min(COMPLETE, item.progress + DEMO_STEP)
            const completed: FileItemState = failUpload ? 'error' : 'uploaded'
            return { ...item, progress, state: progress === COMPLETE ? completed : 'loading' }
          }))
      }, DEMO_TICK)
      return () => {
        clearInterval(timer)
      }
    }, [failUpload, files])
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: spacing.layout.xs2,
        }}
      >
        <Upload
          {...args}
          label={args.label ?? (args.state === 'error' ? rejectionLabel : undefined)}
          onSelect={(accepted, event) => {
            args.onSelect?.(accepted, event)
            setRejectionLabel(undefined)
            setArgs({ state: 'default' })
            setFiles((previous) => [
              ...(args.multiple ? previous : []),
              ...accepted.map((file) => {
                nextId.current += 1
                return {
                  id: String(nextId.current),
                  name: file.name,
                  progress: 0,
                  state: 'loading' as const,
                }
              }),
            ])
          }}
          onReject={(rejected, event) => {
            args.onReject?.(rejected, event)
            setRejectionLabel(REJECTION_LABEL)
            setArgs({ state: 'error' })
          }}
        >
          {files.map((file) => (
            <FileItem
              key={file.id}
              name={file.name}
              state={file.state}
              progress={file.progress}
              onRemove={() => {
                setFiles((items) => items.filter((item) => item.id !== file.id))
                if (files.length === 1) {
                  setRejectionLabel(undefined)
                  setArgs({ state: 'default' })
                }
              }}
            />
          ))}
        </Upload>
      </div>
    )
  },
}
export default meta
export const Base: StoryObj<typeof meta> = {}
