import React from 'react'

const createInputRenderer =
  (Input) =>
  (getInputProps, inputProps = {}) =>
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
