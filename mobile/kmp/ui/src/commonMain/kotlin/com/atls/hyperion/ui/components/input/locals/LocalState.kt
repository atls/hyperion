package com.atls.hyperion.ui.components.input.locals

import androidx.compose.runtime.compositionLocalOf
import com.atls.hyperion.ui.components.input.state.InputState

val LocalState = compositionLocalOf<InputState> {
    error("InputState not provided")
}
