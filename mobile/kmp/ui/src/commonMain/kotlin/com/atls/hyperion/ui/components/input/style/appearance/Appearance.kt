package com.atls.hyperion.ui.components.input.style.appearance

import com.atls.hyperion.ui.components.input.state.InputState

data class InputAppearance(
    val default: Colors,
    val filled: Colors,
    val focused: Colors,
    val disabled: Colors,
    val error: Colors,
    val active: Colors
) {
    companion object Companion

    fun getColorsFromState(state: InputState): Colors =
        when (state) {
            InputState.Default -> default
            InputState.Disabled -> disabled
            InputState.Error -> error
            InputState.Filled -> filled
            InputState.Focused -> focused
            InputState.Active -> active
        }
}
