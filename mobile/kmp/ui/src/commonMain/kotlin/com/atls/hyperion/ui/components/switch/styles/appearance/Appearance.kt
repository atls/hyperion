package com.atls.hyperion.ui.components.switch.styles.appearance

data class SwitchAppearance(
    val off: SwitchAppearanceStates,
    val on: SwitchAppearanceStates,
) {
    companion object
}

data class SwitchAppearanceStates(
    val default: Colors,
    val pressed: Colors,
    val focused: Colors,
    val disabled: Colors,
)
