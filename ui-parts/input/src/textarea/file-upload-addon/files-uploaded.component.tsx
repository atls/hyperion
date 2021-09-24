import React, { useEffect }   from 'react'
import { FC }                 from 'react'

import { useStore }           from './context'
import { FilesUploadedProps } from './file-upload-addon.interfaces'

const FilesUploaded: FC<FilesUploadedProps> = ({ FileList }) => {
  const {
    files: [files, setFiles],
  } = useStore()

  useEffect(() => {
    setFiles([...files, { name: '21' }])
  }, [])

  return <FileList files={files} />
}

export { FilesUploaded }
