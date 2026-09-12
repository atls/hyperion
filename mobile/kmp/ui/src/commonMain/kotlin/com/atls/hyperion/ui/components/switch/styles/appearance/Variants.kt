package com.atls.hyperion.ui.components.switch.styles.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.LocalHyperionColors

@Composable
fun SwitchAppearance.Companion.default(): SwitchAppearance {
    val colors = LocalHyperionColors.current

    return SwitchAppearance(
        off = SwitchAppearanceStates(
            default = Colors(
                background = colors.action.subtle,
                border = colors.action.subtle,
                thumb = colors.surface.soft
            ),
            pressed = Colors(
                background = colors.text.tertiary,
                border = colors.action.subtle,
                thumb = colors.surface.soft
            ),
            disabled = Colors(
                background = colors.action.subtle,
                border = colors.action.subtle,
                thumb = colors.text.muted
            ),
            focused = Colors(
                background = colors.action.subtle,
                border = colors.action.hover,
                thumb = colors.surface.soft
            )
        ),
        on = SwitchAppearanceStates(
            default = Colors(
                background = colors.action.base,
                border = colors.action.hover,
                thumb = colors.surface.soft
            ),
            pressed = Colors(
                background = colors.action.hover,
                border = colors.action.pressed,
                thumb = colors.surface.soft
            ),
            disabled = Colors(
                background = colors.action.disabled,
                border = colors.action.subtle,
                thumb = colors.text.muted
            ),
            focused = Colors(
                background = colors.action.base,
                border = colors.action.pressed,
                thumb = colors.surface.soft
            )
        )
    )
}
