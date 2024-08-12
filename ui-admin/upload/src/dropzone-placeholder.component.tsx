import React                       from 'react'

import { UploadIcon }              from '@atls-ui-admin/icons'

import { PlaceholderAccept }       from './placeholder-accept/index.js'
import { PlaceholderIcon }         from './placeholder-icon/index.js'
import { PlaceholderLink }         from './placeholder-link/index.js'
import { dropzoneContainerStyles } from './container/container.css.js'

export const DropzonePlaceholder = ({ accept, children }: any) => (
  <div className={dropzoneContainerStyles}>
    <PlaceholderIcon>
      <UploadIcon height={40} width={40} />
    </PlaceholderIcon>
    <PlaceholderAccept>{accept}</PlaceholderAccept>
    <PlaceholderLink>{children}</PlaceholderLink>
  </div>
)
