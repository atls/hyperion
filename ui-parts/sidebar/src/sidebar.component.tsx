import type { ReactNode }         from 'react'
import type { PropsWithChildren } from 'react'

import React                      from 'react'

import { Switch }                 from '@atls-ui-parts/switch'
import { useHover }               from '@atls-utils/use-hover'

import { Container }              from './container/index.js'
import { Expander }               from './expander/index.js'
import { Items }                  from './items/index.js'
import { Pinner }                 from './pinner/index.js'
import { Wrapper }                from './wrapper/index.js'
import { usePinnedState }         from './hooks/index.js'

export const Sidebar = ({ children }: PropsWithChildren): ReactNode => {
  const [hovered, hoverProps] = useHover()
  const [pinned, setPinned] = usePinnedState()

  return (
    <Wrapper pinned={pinned}>
      <Container {...hoverProps}>
        <Expander opened={pinned || hovered}>
          <Items>{children}</Items>
          <Pinner>
            <Switch checked={pinned} onChange={setPinned} />
          </Pinner>
        </Expander>
      </Container>
    </Wrapper>
  )
}
