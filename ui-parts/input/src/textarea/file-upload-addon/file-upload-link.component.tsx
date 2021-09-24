import React                   from 'react'
import { FC }                  from 'react'
import { useEffect }           from 'react'

import { FileUploadLinkProps } from './file-upload-addon.interfaces'
import { useStore }            from './context'
import { RawInput }            from '../../input'

const FileUploadLink: FC<FileUploadLinkProps> = ({ LinkPlaceholder }) => {
  const {
    inputNode,
    files: [files, setFiles],
  } = useStore()

  const invokeFileUpload = (event) => {
    inputNode.current.click()
  }

  const updateFiles = (event) => setFiles(Object.values(event.target.files))

  const toEnumObject = (arr) => arr.reduce((result, i, idx) => ({ ...result, [idx]: i }), {})

  useEffect(() => {
    inputNode.current.files = new FileList(files)
  }, [files, inputNode])

  return (
    <>
      <LinkPlaceholder onClick={invokeFileUpload} />
      <RawInput type='file' onChange={updateFiles} ref={inputNode} style={{ display: 'none' }} />
    </>
  )
}

export { FileUploadLink }
