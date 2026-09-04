package com.atls.hyperion.ui.components.input.styles.appearance

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.theme.LocalHyperionColors

@Composable
fun InputAppearance.Companion.primary(): InputAppearance {
    val colors = LocalHyperionColors.current

    return InputAppearance(
        default = Colors(
            backgroundColor = colors.action.subtle,
            textColor = colors.text.tertiary,
            borderColor = colors.action.disabled
        ),
        filled = Colors(
            backgroundColor = colors.action.subtle,
            textColor = colors.text.secondary,
            borderColor = colors.action.disabled
        ),
        focused = Colors(
            backgroundColor = colors.action.subtle,
            textColor = colors.text.secondary,
            borderColor = colors.action.pressed
        ),
        disabled = Colors(
            backgroundColor = colors.action.subtle,
            textColor = colors.text.muted,
            borderColor = colors.action.subtle
        ),
        error = Colors(
            backgroundColor = colors.action.subtle,
            textColor = colors.status.error,
            borderColor = colors.status.error
        ),
        active = Colors(
            backgroundColor = colors.action.disabled,
            textColor = colors.text.secondary,
            borderColor = colors.action.hover
        ),
        elevated = true
    )
}

@Composable
fun InputAppearance.Companion.secondary(): InputAppearance {
    val colors = LocalHyperionColors.current

    return InputAppearance(
        default = Colors(
            backgroundColor = Color.Transparent,
            textColor = colors.text.tertiary,
            borderColor = colors.action.disabled
        ),
        filled = Colors(
            backgroundColor = Color.Transparent,
            textColor = colors.text.secondary,
            borderColor = colors.action.disabled
        ),
        focused = Colors(
            backgroundColor = Color.Transparent,
            textColor = colors.text.secondary,
            borderColor = colors.action.pressed
        ),
        disabled = Colors(
            backgroundColor = Color.Transparent,
            textColor = colors.text.muted,
            borderColor = colors.action.subtle
        ),
        error = Colors(
            backgroundColor = Color.Transparent,
            textColor = colors.status.error,
            borderColor = colors.status.error
        ),
        active = Colors(
            backgroundColor = colors.action.subtle,
            textColor = colors.text.secondary,
            borderColor = colors.action.pressed
        )
    )
}
