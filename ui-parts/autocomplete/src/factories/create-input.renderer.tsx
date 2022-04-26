import React from 'react'

const createInputRenderer = (Input) =>
  (getInputProps, inputProps = {}) =>
  // eslint-disable-next-line
  ({ triggerRef, isOpen, layerSide }) => {
    const { onChange, ...restProps } = getInputProps({
      ...inputProps,
      ref: triggerRef,
    })

    const props = {
      ...restProps,
      onChangeNative: onChange,
    }

    return <Input {...props} />
  }

export { createInputRenderer }
