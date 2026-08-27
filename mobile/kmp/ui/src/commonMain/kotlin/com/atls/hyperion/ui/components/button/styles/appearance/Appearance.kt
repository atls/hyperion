package com.atls.hyperion.ui.components.button.styles.appearance

import com.atls.hyperion.ui.components.button.state.ButtonState

data class ButtonAppearance(
    val default: Colors,
    val pressed: Colors,
    val disabled: Colors,
    val focused: Colors
) {
    fun fromState(state: ButtonState): Colors {
        return when (state) {
            ButtonState.Default -> default
            ButtonState.Disabled -> disabled
            ButtonState.Pressed -> pressed
            ButtonState.Focused -> focused
        }
    }

    companion object
}
