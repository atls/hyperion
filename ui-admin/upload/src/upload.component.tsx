import React, { Children, cloneElement, useEffect } from 'react'
import { useUpload }                                from '@monstrs/react-upload'
import { useDropzone }                              from 'react-dropzone'

import { Container }                                from './container.component'
import { Placeholder }                              from './placeholder.component'

const Upload: any = ({
  children,
  accept = '',
  multiple = false,
  placeholder,
  onPreview,
  onFile,
}) => {
  const upload = useUpload()

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({ accept, multiple })

  useEffect(() => {
    acceptedFiles.forEach(file => {
      let preview = null

      if (onPreview) {
        preview = URL.createObjectURL(file)

        onPreview({
          id: null,
          url: preview,
          preview,
        })
      }

      upload(file).then(data => {
        if (preview) {
          onFile({ ...data, preview })
        } else {
          onFile(data)
        }
      })
    })
  }, [acceptedFiles.map(file => file.name).join()])

  const child = Children.only(children)

  const content = [
    children.props && children.props.children ? children.props.children : null,
    placeholder ? <Placeholder key='placeholder'>{placeholder}</Placeholder> : null,
    <input key='input' {...getInputProps()} />,
  ]

  // eslint-disable-next-line no-underscore-dangle
  if (child.type.__emotion_base) {
    return cloneElement(
      children,
      {
        ...getRootProps({ isDragActive, isDragAccept, isDragReject }),
        as: Container,
      },
      content
    )
  }

  return (
    <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })} {...child.props}>
      {content}
    </Container>
  )
}

export { Upload }
