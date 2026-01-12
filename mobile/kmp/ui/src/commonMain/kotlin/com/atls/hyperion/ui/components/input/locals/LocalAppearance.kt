package com.atls.hyperion.ui.components.input.locals

import androidx.compose.runtime.compositionLocalOf
import com.atls.hyperion.ui.components.input.style.appearance.InputAppearance

val LocalAppearance = compositionLocalOf<InputAppearance> {
    error("InputAppearance not provided")
}
