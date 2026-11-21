'use client'

import type { LinkProps }   from './interfaces.js'

import { LinkExternalIcon } from '@atls-ui-parts/icons'
import { useTheme }         from '@atls-ui-parts/theme'

import { Container }        from './container/component.js'
import { Icon }             from './icon/component.js'
import { Text }             from './text/component.js'
import { linkAppearances }  from './styles/appearance/variants.js'
import { linkShapes }       from './styles/shape/variants.js'
export const Link = ({
  variant = 'standalone',
  shape = linkShapes[variant],
  appearance = variant,
  icon,
  children,
  ...props
}: LinkProps) => {
  const theme = useTheme()
  const colors = typeof appearance === 'string' ? linkAppearances[appearance](theme) : appearance
  const mark = icon === undefined && variant === 'standalone' ? <LinkExternalIcon /> : icon
  return (
    <Container {...props} shape={shape.container}>
      <Text shape={shape.text} appearance={colors.text}>
        {children}
      </Text>
      {mark != null && mark !== false && (
        <Icon shape={shape.icon} appearance={colors.icon}>
          {mark}
        </Icon>
      )}
    </Container>
  )
}
