import React            from 'react'
import { Children }     from 'react'
import { cloneElement } from 'react'
import { useEffect }    from 'react'
import { useDropzone }  from 'react-dropzone'

import { Container }    from './container/index.js'
import { Placeholder }  from './placeholder/index.js'
import { useUpload }    from './use-upload/index.js'

export const Upload: any = ({
  children,
  accept = {},
  multiple = false,
  placeholder,
  onPreview,
  onFile,
}) => {
  const upload = useUpload({})

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles } =
    useDropzone({ accept, multiple })

  useEffect(() => {
    acceptedFiles.forEach((file) => {
      let preview: string | null = null

      if (onPreview) {
        preview = URL.createObjectURL(file)

        onPreview({ id: null, url: preview, preview })
      }

      upload(file).then((data) => (preview ? onFile({ ...data, preview }) : onFile(data)))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles.map((file) => file.name).join()])

  const child = Children.only(children)

  const content = [
    children.props && children.props.children ? children.props.children : null,
    placeholder ? <Placeholder key='placeholder'>{placeholder}</Placeholder> : null,
    // @ts-ignore
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
