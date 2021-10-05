import React, { FunctionComponent, useRef } from 'react'

import { Switch }                           from '@atls-ui-parts/switch'

import { Container }                        from './container'
import { Expander }                         from './expander'
import { Items }                            from './items'
import { Pinner }                           from './pinner'
import { SidebarProps }                     from './sidebar.interfaces'
import { Wrapper }                          from './wrapper'
import { useHover, usePinnedState }         from './hooks'

const Sidebar: FunctionComponent<SidebarProps> = ({ children }) => {
  const node = useRef<HTMLDivElement>(null)
  const [pinned, setPinned] = usePinnedState()
  const [hovered] = useHover(node)

  return (
    <Wrapper pinned={pinned}>
      <Container ref={node}>
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

export { Sidebar }
