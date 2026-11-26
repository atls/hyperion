import type { HTMLAttributes }      from 'react'
import type { InputHTMLAttributes } from 'react'
import type { ReactNode }           from 'react'
import type { DropzoneOptions }     from 'react-dropzone'
import type { DropzoneState }       from 'react-dropzone'

import type { UploadState }         from './states.js'
import type { UploadAppearance }    from './styles/appearance/interfaces.js'
import type { UploadShape }         from './styles/shape/interfaces.js'

export interface UploadProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'>,
    Pick<
      DropzoneOptions,
      | 'accept'
      | 'disabled'
      | 'maxFiles'
      | 'maxSize'
      | 'minSize'
      | 'multiple'
      | 'onFileDialogCancel'
      | 'validator'
    > {
  state?: UploadState
  shape?: UploadShape
  appearance?: UploadAppearance | 'default'
  label?: string
  icon?: ReactNode
  progress?: number
  progressIndicator?: ReactNode
  inputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'accept' | 'defaultValue' | 'disabled' | 'multiple' | 'type' | 'value'
  >
  onSelect?: DropzoneOptions['onDropAccepted']
  onReject?: DropzoneOptions['onDropRejected']
}

export interface UseUploadOptions extends Pick<
  UploadProps,
  | 'accept'
  | 'disabled'
  | 'maxFiles'
  | 'maxSize'
  | 'minSize'
  | 'multiple'
  | 'onFileDialogCancel'
  | 'onReject'
  | 'onSelect'
  | 'validator'
> {
  state: UploadState
}

export type UseUploadResult = Pick<
  DropzoneState,
  'getInputProps' | 'getRootProps' | 'isDragActive' | 'isDragReject'
>
