import type { Meta }          from '@storybook/react'
import type { StoryObj }      from '@storybook/react'

import type { FileItemState } from '../index.js'
import type { UploadProps }   from '../index.js'

import { useEffect }          from 'storybook/preview-api'
import { useRef }             from 'storybook/preview-api'
import { useState }           from 'storybook/preview-api'
import { useArgs }            from 'storybook/preview-api'

import { Upload }             from '../index.js'
import { FileItem }           from '../index.js'
import { stageStyles }        from './styles.css.js'

const DEMO_TICK = 250
const DEMO_STEP = 20
const COMPLETE = 100

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
      <div className={stageStyles}>
        <Upload
          {...args}
          onSelect={(accepted, event) => {
            args.onSelect?.(accepted, event)
            setArgs({ state: 'default', label: undefined })
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
            setArgs({ state: 'error', label: 'Choose a PNG or JPEG image' })
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
