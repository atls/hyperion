package com.atls.hyperion.ui.components.input.state

sealed interface InputState {
    data object Default : InputState
    data object Focused : InputState
    data object Filled : InputState
    data object Disabled : InputState
    data object Error : InputState
    data object Active : InputState
}
