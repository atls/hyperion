import styled                                       from '@emotion/styled'
import React, { useRef }                            from 'react'
import { typography }                               from 'styled-system'

import { HandleElement, baseHandleStyles }          from './handle'
import { SwitchProps }                              from './switch.interfaces'
import { ThumbElement, thumbMotionVariants }        from './thumb'
import { useSwitch }                                from './hooks'
import { baseThumbStyles, ifDisabledThumbModifier } from './thumb'

export default {
  title: 'Компоненты/Переключатель/Примеры',
}

const Preview = styled.div({
  position: 'relative',
  minHeight: 24,
  minWidth: 24,
  paddingBottom: 8,
  paddingRight: 16,
})

const Container = styled.div({
  display: 'flex',
})

const Title = styled.div<any>(typography)

const Example = ({ children, title }) => (
  <Container>
    <Preview>{children}</Preview>
    <Title fontFamily='primary'>{title}</Title>
  </Container>
)

export const Base = () => {
  const Thumb = styled(ThumbElement)(baseThumbStyles, ifDisabledThumbModifier())

  const Element = styled(HandleElement)(baseHandleStyles)

  const Switch = ({ disabled, checked: defaultValue, onChange }: SwitchProps) => {
    const node = useRef<HTMLButtonElement>(null)
    const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

    return (
      <Element ref={node} onClick={setChecked}>
        <Thumb disabled={disabled} checked={checked} />
      </Element>
    )
  }

  return <Switch />
}

Base.story = {
  name: 'Базовый',
}

export const Color = () => {
  const Thumb = styled(ThumbElement)(baseThumbStyles, ifDisabledThumbModifier(), {
    background: '#ffffff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26)',
  })

  const Handle = styled(HandleElement)(baseHandleStyles, {
    background: '#4695ff',
    borderColor: '#4695ff',
  })

  const Switch = ({ disabled, checked: defaultValue, onChange }: SwitchProps) => {
    const node = useRef<HTMLButtonElement>(null)
    const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

    return (
      <Handle ref={node} onClick={setChecked}>
        <Thumb disabled={disabled} checked={checked} />
      </Handle>
    )
  }

  return <Switch />
}

Color.story = {
  name: 'Цвет',
}

export const Shape = () => {
  const Thumb = styled(ThumbElement)(baseThumbStyles, ifDisabledThumbModifier(), {
    borderRadius: 0,
  })

  const Handle = styled(HandleElement)(baseHandleStyles, {
    borderRadius: 0,
  })

  const Switch = ({ disabled, checked: defaultValue, onChange }: SwitchProps) => {
    const node = useRef<HTMLButtonElement>(null)
    const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

    return (
      <Handle ref={node} onClick={setChecked}>
        <Thumb disabled={disabled} checked={checked} />
      </Handle>
    )
  }

  return <Switch />
}

Shape.story = {
  name: 'Форма',
}

export const Size = () => {
  const Thumb = styled(ThumbElement)(baseThumbStyles, ifDisabledThumbModifier(), {
    width: 24,
    height: 24,
  })

  Thumb.defaultProps = {
    ...Thumb.defaultProps,
    variants: {
      ...thumbMotionVariants,
      checked: {
        left: 36,
      },
    },
  }

  const Handle = styled(HandleElement)(baseHandleStyles, {
    width: 64,
    height: 28,
  })

  const Switch = ({ disabled, checked: defaultValue, onChange }: SwitchProps) => {
    const node = useRef<HTMLButtonElement>(null)
    const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

    return (
      <Handle ref={node} onClick={setChecked}>
        <Thumb disabled={disabled} checked={checked} />
      </Handle>
    )
  }

  return <Switch />
}

Size.story = {
  name: 'Размер',
}

export const Thumb = () => {
  const BaseThumb = styled(ThumbElement)(baseThumbStyles)

  const ColorThumb = styled(ThumbElement)(baseThumbStyles, {
    background: '#4695ff',
  })

  const ShapeThumb = styled(ThumbElement)(baseThumbStyles, {
    borderRadius: 0,
  })

  const SizeThumb = styled(ThumbElement)(baseThumbStyles, {
    width: 24,
    height: 24,
  })

  const DisabledThumb = styled(ThumbElement)(
    baseThumbStyles,
    ifDisabledThumbModifier({ background: '#fff' })
  )

  return (
    <>
      <Example title='Базовый'>
        <BaseThumb />
      </Example>
      <Example title='Цвет'>
        <ColorThumb />
      </Example>
      <Example title='Форма'>
        <ShapeThumb />
      </Example>
      <Example title='Отключенный'>
        <DisabledThumb disabled />
      </Example>
      <Example title='Размер'>
        <SizeThumb />
      </Example>
    </>
  )
}

Thumb.story = {
  name: 'Переключатель',
}

export const Handle = () => {
  const BaseHandle = styled(HandleElement)(baseHandleStyles)

  const ColorHandle = styled(HandleElement)(baseHandleStyles, {
    background: '#4695ff',
    borderColor: '#4695ff',
  })

  const ShapeHandle = styled(HandleElement)(baseHandleStyles, {
    borderRadius: 0,
  })

  const SizeHandle = styled(HandleElement)(baseHandleStyles, {
    width: 64,
    height: 32,
  })

  return (
    <>
      <Example title='Базовый'>
        <BaseHandle />
      </Example>
      <Example title='Цвет'>
        <ColorHandle />
      </Example>
      <Example title='Форма'>
        <ShapeHandle />
      </Example>
      <Example title='Размер'>
        <SizeHandle />
      </Example>
    </>
  )
}

Handle.story = {
  name: 'Элемент',
}
