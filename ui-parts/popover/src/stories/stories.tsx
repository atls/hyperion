import type { Meta }          from '@storybook/react'
import type { StoryObj }      from '@storybook/react'

import type { PopoverProps }  from '../interfaces.js'

import { useId }              from 'react'
import { useState }           from 'storybook/preview-api'
import { useArgs }            from 'storybook/preview-api'
import { expect }             from 'storybook/test'
import { userEvent }          from 'storybook/test'
import { waitFor }            from 'storybook/test'
import { within }             from 'storybook/test'

import { useTheme }           from '@atls-ui-parts/theme'

import { Popover }            from '../component.js'
import { CONTENT_SLOT_ROWS }  from './constants.js'
import { popoverAppearances } from '../styles/appearance/variants.js'
import { popoverShapes }      from '../styles/shape/variants.js'
import { contentSlotStyles }  from './styles.css.js'
interface PopoverStoryProps extends Omit<PopoverProps, 'children' | 'content' | 'shape'> {
  shape: keyof typeof popoverShapes
  interactiveContent: boolean
}
const meta: Meta<PopoverStoryProps> = {
  title: 'Components/Popover',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  render: function Render({ shape = 'default', interactiveContent, ...props }) {
    const [, updateArgs] = useArgs<PopoverStoryProps>()
    const [count, setCount] = useState(0)
    const inputId = useId()
    const theme = useTheme()
    const content = interactiveContent ? (
      <div>
        <label htmlFor={inputId}>
          Popover input
          <input id={inputId} />
        </label>
        <button
          type='button'
          onClick={() => {
            setCount((v) => v + 1)
          }}
        >
          Increment
        </button>
        <output>{count}</output>
      </div>
    ) : (
      <div
        className={contentSlotStyles}
        style={{
          backgroundColor: theme.colors.action.subtle,
          color: theme.colors.text.secondary,
          borderColor: theme.colors.action.base,
        }}
      >
        {Array.from({ length: CONTENT_SLOT_ROWS }, (_, index) => (
          <div key={index}>Content slot</div>
        ))}
      </div>
    )
    return (
      <Popover
        {...props}
        shape={popoverShapes[shape]}
        content={content}
        onOpenChange={(nextOpen, event, reason) => {
          updateArgs({ open: nextOpen })
          props.onOpenChange?.(nextOpen, event, reason)
        }}
      >
        <button type='button'>Trigger</button>
      </Popover>
    )
  },
  argTypes: {
    shape: { control: 'select', options: Object.keys(popoverShapes) },
    appearance: { control: 'select', options: Object.keys(popoverAppearances) },
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
    },
    open: { control: 'boolean' },
    interactiveContent: { control: 'boolean' },
    defaultOpen: { control: false },
    contentProps: { control: false },
  },
}
export default meta
export const Base: StoryObj<PopoverStoryProps> = {
  name: 'Базовый',
  args: {
    shape: 'default',
    appearance: 'default',
    placement: 'top',
    open: false,
    interactiveContent: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)
    const trigger = canvas.getByRole('button', { name: 'Trigger' })
    await userEvent.click(trigger)
    const popover = await body.findByRole('dialog', { name: 'Trigger' })
    await waitFor(async () => {
      await expect(popover).toBeVisible()
    })
    await expect(popover).toHaveTextContent('Content slot')
    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(trigger).toHaveFocus()
      await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    })
  },
}
