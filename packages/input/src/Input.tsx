import React                                                from 'react'

import { Addons, Attachments, LabelContainer, StyledInput } from './parts'
import { useHooks }                                         from './hooks'

const Input = (props: any) => {
  const hooksProps = useHooks(props)
  const finalProps = { ...props, ...hooksProps }

  return (
    <Addons {...finalProps}>
      <Attachments {...finalProps}>
        <LabelContainer {...finalProps}>
          <StyledInput {...finalProps} />
        </LabelContainer>
      </Attachments>
    </Addons>
  )
}

Input.defaultProps = {
  size: 'normal',
}

export { Input }
