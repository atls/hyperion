import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { Switch }            from '@atls-ui-parts/switch'
import { useHover }          from '@atls-utils/use-hover'

import { Container }         from './container/index.js'
import { Expander }          from './expander/index.js'
import { Items }             from './items/index.js'
import { Pinner }            from './pinner/index.js'
import { Wrapper }           from './wrapper/index.js'
import { usePinnedState }    from './hooks/index.js'

export const Sidebar: FC<PropsWithChildren> = ({ children }) => {
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
