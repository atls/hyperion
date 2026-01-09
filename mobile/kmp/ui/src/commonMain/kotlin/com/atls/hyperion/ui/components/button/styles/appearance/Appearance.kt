package com.atls.hyperion.ui.components.button.styles.appearance

import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.components.button.state.ButtonState
import com.atls.hyperion.ui.components.button.styles.appearance.colors.Colors
import com.atls.hyperion.ui.theme.tokens.Elevation

data class ButtonAppearance(
    val default: Colors,
    val pressed: Colors,
    val disabled: Colors,
    val shadowElevation: Dp = Elevation.none
) {
    fun fromState(state: ButtonState): Colors {
        return when (state) {
            ButtonState.Default -> default
            ButtonState.Disabled -> disabled
            ButtonState.Pressed -> pressed
        }
    }

    companion object
}
