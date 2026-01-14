package com.atls.hyperion.ui.components.switch.styles.appearance

import com.atls.hyperion.ui.components.switch.state.SwitchState

data class SwitchAppearance(
    val default: Colors,
    val checked: Colors = default,
    val disabled: Colors = default
) {
    fun fromState(state: SwitchState): Colors {
        return when (state) {
            SwitchState.Default -> default
            SwitchState.Checked -> checked
            SwitchState.Disabled -> disabled
        }
    }

    companion object
}
