import React, { useMemo } from 'react'

const createInputRenderer = Input => (getInputProps, inputProps = {}) => ({
  triggerRef,
  isOpen,
  layerSide,
}) => {
  const props = useMemo(() => {
    const { onChange, ...restProps } = getInputProps({
      ...inputProps,
      ref: triggerRef,
    })

    return {
      ...restProps,
      onChangeNative: onChange,
    }
  }, [triggerRef, getInputProps])

  return <Input {...props} />
}

export { createInputRenderer }
