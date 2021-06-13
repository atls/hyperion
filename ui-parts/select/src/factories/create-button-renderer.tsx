import React             from 'react'
import { useMemo }       from 'react'

import { Box }           from '../box'
import { ArrowDownIcon } from '../icons'

export const createButtonRenderer =
  (Button) =>
  ({
    height,
    buttonColor,
    selectedItem,
    placeholder,
    arrow,
    arrowSize,
    isOpen,
    triggerProps,
    getToggleButtonProps,
    ...buttonProps
  }) => {
    const props = useMemo(
      () => ({
        ...getToggleButtonProps(triggerProps),
        ...buttonProps,
      }),
      [getToggleButtonProps, triggerProps, buttonProps]
    )

    return (
      <Button height={height} backgroundColor={buttonColor} {...props}>
        <Box height={height} overflow>
          {selectedItem || placeholder}
        </Box>
        <Box>{arrow && <ArrowDownIcon width={arrowSize} height={arrowSize} active={isOpen} />}</Box>
      </Button>
    )
  }
