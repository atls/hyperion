package com.atls.hyperion.ui.components.button.locals

import androidx.compose.runtime.compositionLocalOf
import com.atls.hyperion.ui.components.button.state.ButtonState

val LocalState = compositionLocalOf<ButtonState> {
    error("ButtonState not provided")
}
