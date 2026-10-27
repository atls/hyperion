import type { ReactNode }               from 'react'

import type { PlaceholderProps }        from './placeholder.interfaces.js'

import { clsx }                         from 'clsx'

import { useTheme }                     from '@atls-ui-parts/theme'

import { Container }                    from './container/index.js'
import { Description }                  from './description/index.js'
import { Icon }                         from './icon/index.js'
import { Title }                        from './title/index.js'
import { placeholderShapes }            from './styles/index.js'
import { resolvePlaceholderAppearance } from './styles/index.js'

export const Placeholder = ({
  appearance = 'default',
  className,
  classNames,
  description,
  icon,
  ref,
  shape = placeholderShapes.md,
  style,
  textPosition = 'bottom',
  title,
  ...props
}: PlaceholderProps): ReactNode => {
  const theme = useTheme()
  const appearanceStyles = resolvePlaceholderAppearance(appearance, theme)

  return (
    <Container
      ref={ref}
      {...props}
      className={clsx(classNames?.container, className)}
      hasDescription={description !== undefined}
      hasTitle={title !== undefined}
      horizontalMinHeight={shape.horizontalMinHeight}
      style={{ ...appearanceStyles, gap: shape.gap, ...style }}
      textPosition={textPosition}
    >
      <Icon className={classNames?.icon} shape={shape.icon}>
        {icon}
      </Icon>
      {title !== undefined && (
        <Title className={classNames?.title} shape={shape.title}>
          {title}
        </Title>
      )}
      {description !== undefined && (
        <Description className={classNames?.description} shape={shape.description}>
          {description}
        </Description>
      )}
    </Container>
  )
}
