import type { UseUploadOptions } from './interfaces.js'
import type { UseUploadResult }  from './interfaces.js'

import { useDropzone }           from 'react-dropzone'
export const useUpload = ({
  state,
  disabled,
  onSelect,
  onReject,
  multiple = false,
  ...options
}: UseUploadOptions): UseUploadResult =>
  useDropzone({
    ...options,
    multiple,
    disabled: disabled || state === 'loading',
    onDropAccepted: onSelect,
    onDropRejected: onReject,
  })
