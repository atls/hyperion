import type { ContainerProps } from './interfaces.js'

import { clsx }                from 'clsx'
import NextLink                from 'next/link.js'

import { containerStyles }     from './styles/base.css.js'
const BaseLink = 'default' in NextLink ? NextLink.default : NextLink
export const Container = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  onNavigate,
  disabled,
  shape,
  className,
  style,
  children,
  ref,
  onClick,
  onAuxClick,
  tabIndex,
  ...props
}: ContainerProps) => {
  const anchorProps = {
    ...props,
    ref,
    className: clsx(containerStyles, className),
    style: { ...shape, ...style },
    'aria-disabled': disabled || undefined,
    tabIndex: disabled ? -1 : tabIndex,
  }
  if (disabled) {
    return (
      <a {...anchorProps} role='link' aria-disabled='true' tabIndex={-1}>
        {children}
      </a>
    )
  }
  return (
    <BaseLink
      {...anchorProps}
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
      onNavigate={onNavigate}
      onClick={onClick}
      onAuxClick={onAuxClick}
    >
      {children}
    </BaseLink>
  )
}
