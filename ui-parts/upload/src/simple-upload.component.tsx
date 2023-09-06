/* eslint-disable react-hooks/exhaustive-deps */

import { useUpload }    from '@atls/react-upload'

import React            from 'react'
import { ReactElement } from 'react'
import { FC }           from 'react'
import { Accept }       from 'react-dropzone'
import { cloneElement } from 'react'
import { useEffect }    from 'react'
import { useDropzone }  from 'react-dropzone'

export interface SimpleUploadProps {
  children: ReactElement<any, any>
  bucket: string
  accept?: Accept
  multiple?: boolean
  onFile: (result: UploadResult) => void
  onPreview?: (result: UploadResult) => void
}

export interface UploadResult {
  id: string | null
  url: string
  preview?: string
}

export const SimpleUpload: FC<SimpleUploadProps> = ({
  children,
  bucket,
  accept,
  multiple = false,
  onPreview,
  onFile,
}) => {
  const upload = useUpload({ bucket })

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles } =
    useDropzone({ accept, multiple })

  useEffect(() => {
    acceptedFiles.forEach((file) => {
      let preview

      if (onPreview) {
        preview = URL.createObjectURL(file)

        onPreview({
          id: null,
          url: preview,
          preview,
        })
      }

      upload(file).then((data) => {
        if (preview) {
          onFile({ ...data, preview })
        } else {
          onFile(data)
        }
      })
    })
  }, [acceptedFiles.map((file) => file.name).join()])

  const content = [
    children?.props.children ? children.props.children : null,
    <input key='input' {...getInputProps()} />,
  ]

  return cloneElement(children, getRootProps({ isDragActive, isDragAccept, isDragReject }), content)
}
