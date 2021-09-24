import { ElementType } from 'react'

interface TextareaProps {
  rawInputProps: {
    as: ElementType<any>
    style: { maxWidth: string }
  }
  containerProps: {
    style: { height: string }
  }
}

const createTextareaProps = (): TextareaProps => ({
  rawInputProps: {
    as: 'textarea',
    style: { maxWidth: '100%' },
  },
  containerProps: {
    style: { height: 'min-content' },
  },
})

export { createTextareaProps }
