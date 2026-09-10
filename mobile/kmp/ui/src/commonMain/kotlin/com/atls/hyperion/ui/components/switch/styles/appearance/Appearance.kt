package com.atls.hyperion.ui.components.switch.styles.appearance

import com.atls.hyperion.ui.components.switch.state.SwitchState

data class SwitchAppearance(
    val off: SwitchAppearanceStates,
    val on: SwitchAppearanceStates,
) {
    internal fun fromState(checked: Boolean, state: SwitchState): Colors {
        val states = if (checked) on else off

        return when (state) {
            SwitchState.Default -> states.default
            SwitchState.Pressed -> states.pressed
            SwitchState.Focused -> states.focused
            SwitchState.Disabled -> states.disabled
        }
    }

    companion object
}

data class SwitchAppearanceStates(
    val default: Colors,
    val pressed: Colors,
    val focused: Colors,
    val disabled: Colors,
)
