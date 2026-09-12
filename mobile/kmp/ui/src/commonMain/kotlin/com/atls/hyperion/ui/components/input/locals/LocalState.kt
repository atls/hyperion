package com.atls.hyperion.ui.components.input.locals

import androidx.compose.runtime.compositionLocalOf
import com.atls.hyperion.ui.components.input.state.InputState

internal val LocalState = compositionLocalOf<InputState> {
    InputState.Default
}
