import type { ReactNode }                from 'react'
import type { PropsWithChildren }        from 'react'

import type { DropzonePlaceholderProps } from './interfaces.js'

import { clsx }                          from 'clsx'

import { UploadIcon }                    from '@atls-ui-admin/icons'

import { PlaceholderAccept }             from '../accept/index.js'
import { PlaceholderIcon }               from '../icon/index.js'
import { PlaceholderLink }               from '../link/index.js'
import { dropzoneContainerStyles }       from '../../container/container.css.js'

export const DropzonePlaceholder = ({
  accept,
  children,
  className,
  slotProps,
  ...props
}: PropsWithChildren<DropzonePlaceholderProps>): ReactNode => (
  <div className={clsx(dropzoneContainerStyles, className)} {...props}>
    <PlaceholderIcon {...slotProps?.icon}>
      <UploadIcon height={40} width={40} />
    </PlaceholderIcon>
    <PlaceholderAccept {...slotProps?.accept}>{accept}</PlaceholderAccept>
    <PlaceholderLink {...slotProps?.link}>{children}</PlaceholderLink>
  </div>
)
