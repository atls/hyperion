import React         from 'react'
import { FC }        from 'react'
import { useRef }    from 'react'
import { useState }  from 'react'

import { Provider }  from './context'
import { Container } from './container'
import { File }      from './file-upload-addon.interfaces'

const FileUploadAddon: FC = ({ children }) => {
  const inputNode = useRef(null)

  return (
    <Provider value={{ inputNode, files: useState<File[]>([]) }}>
      <Container>{children}</Container>
    </Provider>
  )
}

export { FileUploadAddon }
