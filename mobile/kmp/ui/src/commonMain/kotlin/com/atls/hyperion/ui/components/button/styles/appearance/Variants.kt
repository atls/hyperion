package com.atls.hyperion.ui.components.button.styles.appearance

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.theme.LocalHyperionColors

@Composable
fun ButtonAppearance.Companion.primary(): ButtonAppearance {
    val colors = LocalHyperionColors.current

    return ButtonAppearance(
        default = Colors.Solid(
            background = colors.action.base,
            content = colors.text.inverse,
            border = colors.action.base
        ),
        pressed = Colors.Solid(
            background = colors.action.pressed,
            content = colors.text.inverse,
            border = colors.action.pressed
        ),
        disabled = Colors.Solid(
            background = colors.action.disabled,
            content = colors.text.muted,
            border = colors.action.subtle
        ),
        focused = Colors.Solid(
            background = colors.action.base,
            content = colors.text.inverse,
            border = colors.action.pressed
        )
    )
}

@Composable
fun ButtonAppearance.Companion.secondary(): ButtonAppearance {
    val colors = LocalHyperionColors.current

    return ButtonAppearance(
        default = Colors.Solid(
            background = colors.action.subtle,
            content = colors.text.secondary,
            border = colors.surface.muted
        ),
        pressed = Colors.Solid(
            background = colors.text.secondary,
            content = colors.text.muted,
            border = colors.action.subtle
        ),
        disabled = Colors.Solid(
            background = colors.surface.muted,
            content = colors.text.tertiary,
            border = colors.surface.muted
        ),
        focused = Colors.Solid(
            background = colors.action.disabled,
            content = colors.text.secondary,
            border = colors.action.hover
        )
    )
}

@Composable
fun ButtonAppearance.Companion.ghost(): ButtonAppearance {
    val colors = LocalHyperionColors.current

    return ButtonAppearance(
        default = Colors.Solid(
            background = Color.Transparent,
            content = colors.text.secondary,
            border = Color.Transparent
        ),
        pressed = Colors.Solid(
            background = colors.action.subtle,
            content = colors.text.tertiary,
            border = colors.action.subtle
        ),
        disabled = Colors.Solid(
            background = Color.Transparent,
            content = colors.text.tertiary,
            border = Color.Transparent
        ),
        focused = Colors.Solid(
            background = Color.Transparent,
            content = colors.text.secondary,
            border = colors.action.disabled
        )
    )
}
