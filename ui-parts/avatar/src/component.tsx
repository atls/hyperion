import type { AvatarProps }  from './interfaces.js'

import { Root }              from '@radix-ui/react-avatar'

import { useTheme }          from '@atls-ui-parts/theme'

import { Box }               from './box/component.js'
import { Container }         from './container/component.js'
import { Fallback }          from './fallback/component.js'
import { Image }             from './image/component.js'
import { Loading }           from './loading/component.js'
import { avatarAppearances } from './styles/appearance/variants.js'
import { avatarShapes }      from './styles/shape/variants.js'
export const Avatar = ({
  alt,
  src,
  fallback = '',
  loading = false,
  loader,
  clickable = false,
  disabled,
  shape = avatarShapes.md,
  appearance = 'default',
  imageProps,
  ...props
}: AvatarProps) => {
  const theme = useTheme()
  const colors =
    typeof appearance === 'string'
      ? avatarAppearances[appearance](theme, shape.box.elevationSize)
      : appearance
  return (
    <Root asChild>
      <Box
        {...props}
        role={clickable ? undefined : 'img'}
        aria-label={props['aria-label'] ?? alt}
        aria-busy={loading || undefined}
        aria-disabled={disabled || undefined}
        clickable={clickable}
        disabled={disabled}
        shape={shape.box}
        appearance={colors.box}
      >
        <Container>
          <Fallback text={fallback} shape={shape.fallback} appearance={colors.fallback} />
          <Image {...imageProps} src={src} alt='' shape={shape.image} />
          {loading && <Loading loader={loader} shape={shape.loading} appearance={colors.loading} />}
        </Container>
      </Box>
    </Root>
  )
}
