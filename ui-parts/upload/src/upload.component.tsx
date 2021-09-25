import React               from 'react'
import { useDropzone }     from 'react-dropzone'

import { UploadContainer } from './upload-container'
import { UploadProps }     from './upload.interface'

const Upload = ({ children, ...dropzoneOpts }: UploadProps) => {
  const { getRootProps, getInputProps, acceptedFiles, ...states } = useDropzone(dropzoneOpts)

  return (
    <UploadContainer {...states} {...getRootProps(states)}>
      <input key='input' {...getInputProps()} />
      {typeof children === 'function' ? children(acceptedFiles) : children}
    </UploadContainer>
  )
}

export { Upload }
