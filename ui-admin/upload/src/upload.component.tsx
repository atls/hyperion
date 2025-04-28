import type { ReactNode }         from 'react'
import type { PropsWithChildren } from 'react'
import type { Accept }            from 'react-dropzone'

import { Children }               from 'react'
import { cloneElement }           from 'react'
import { useEffect }              from 'react'
import { useDropzone }            from 'react-dropzone'
import React                      from 'react'

import { Container }              from './container/index.js'
import { Placeholder }            from './placeholder/index.js'
import { useUpload }              from './use-upload/index.js'

interface UploadProps {
  accept?: Accept
  multiple?: boolean
  placeholder: ReactNode | string
  onPreview?: (data?: Record<string, string | null>) => void
  onFile?: (data?: Record<string, string> | null) => void
}

export const Upload = ({
  children,
  accept = {},
  multiple = false,
  placeholder,
  onPreview,
  onFile,
}: PropsWithChildren<UploadProps>): ReactNode => {
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

      upload(file).then((data) => (preview ? onFile?.({ ...data, preview }) : onFile?.(data)))
    })
  }, [acceptedFiles.map((file) => file.name).join()])

  const child = Children.only(children)

  const content = [
    // @ts-expect-error correct children types
    children?.props?.children ? children.props.children : null,
    placeholder ? <Placeholder key='placeholder'>{placeholder}</Placeholder> : null,
    <input key='input' {...getInputProps()} />,
  ]

  // @ts-expect-error correct child types
  // eslint-disable-next-line no-underscore-dangle
  if (child.type.__emotion_base) {
    return cloneElement(
      // @ts-expect-error correct children types
      children,
      {
        ...getRootProps({ isDragActive, isDragAccept, isDragReject }),
        as: Container,
      },
      content
    )
  }

  return (
    // @ts-expect-error correct child types
    <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })} {...child.props}>
      {content}
    </Container>
  )
}
