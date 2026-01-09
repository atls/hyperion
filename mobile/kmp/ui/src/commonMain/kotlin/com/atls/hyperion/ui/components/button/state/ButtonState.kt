package com.atls.hyperion.ui.components.button.state

sealed interface ButtonState {
    object Default : ButtonState
    object Disabled : ButtonState
    object Pressed : ButtonState
}
