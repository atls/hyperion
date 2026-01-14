package com.atls.hyperion.ui.components.checkbox.styles.appearance

import com.atls.hyperion.ui.components.checkbox.state.State

data class CheckboxAppearance(
    val default: Colors,
    val checked: Colors,
    val disabled: Colors
) {
    fun fromState(state: State): Colors {
        return when (state) {
            State.Default -> default
            State.Checked -> checked
            State.Disabled -> disabled
        }
    }

    companion object
}
