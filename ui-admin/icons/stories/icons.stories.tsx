import type { Meta }     from '@storybook/react'
import type { StoryObj } from '@storybook/react'

import React             from 'react'

import { BagIcon }       from '@atls-ui-admin/icons'
import { ChartIcon }     from '@atls-ui-admin/icons'
import { CheckIcon }     from '@atls-ui-admin/icons'
import { CloseIcon }     from '@atls-ui-admin/icons'
import { DragIcon }      from '@atls-ui-admin/icons'
import { LoadingIcon }   from '@atls-ui-admin/icons'
import { LogoIcon }      from '@atls-ui-admin/icons'
import { PencilIcon }    from '@atls-ui-admin/icons'
import { RubyIcon }      from '@atls-ui-admin/icons'
import { TrashIcon }     from '@atls-ui-admin/icons'
import { UploadIcon }    from '@atls-ui-admin/icons'
import { UserIcon }      from '@atls-ui-admin/icons'
import { UsersIcon }     from '@atls-ui-admin/icons'
import { Column }        from '@atls-ui-admin/layout'
import { Row }           from '@atls-ui-admin/layout'
import { Layout }        from '@atls-ui-admin/layout'
import { ThemeProvider } from '@atls-ui-admin/theme'

const meta: Meta = {
  title: 'Admin/Icons',
  tags: ['autodocs'],
}

export default meta

export const AllIcons: StoryObj = {
  name: 'Все иконки',
  render: () => (
    <ThemeProvider>
      <Column fill alignItems='center' justifyContent='center'>
        <Layout flexBasis='50px' />
        <Row gap='16px'>
          <BagIcon width='$g24' height='$g24' />
          <ChartIcon width='$g24' height='$g24' />
          <CheckIcon width='$g24' height='$g24' />
          <CloseIcon width='$g24' height='$g24' />
          <DragIcon width='$g24' height='$g24' color='$green' />
          <LoadingIcon width='$g24' height='$g24' />
          <LogoIcon width='$g24' height='$g24' />
          <PencilIcon width='$g24' height='$g24' />
          <RubyIcon width='$g24' height='$g24' />
          <TrashIcon width='$g24' height='$g24' />
          <UploadIcon width='$g24' height='$g24' />
          <UserIcon width='$g24' height='$g24' color='$red' />
          <UsersIcon width='$g24' height='$g24' color='DarkRed' />
        </Row>
        <Layout flexBasis='50px' />
      </Column>
    </ThemeProvider>
  ),
}
