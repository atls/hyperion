import { DropzoneOptions }      from 'react-dropzone'

import { UploadContainerProps } from './upload-container'

export interface UploadProps
  extends Omit<UploadContainerProps, 'isDragActive' | 'isDragReject' | 'isDragAccept'>,
    DropzoneOptions {
  children?: any | ((acceptedFiles: any[]) => any)
}
