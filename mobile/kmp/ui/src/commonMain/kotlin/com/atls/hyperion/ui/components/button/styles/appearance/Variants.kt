package com.atls.hyperion.ui.components.button.styles.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.components.button.styles.appearance.colors.Colors
import com.atls.hyperion.ui.theme.Theme
import com.atls.hyperion.ui.theme.properties.shadow.Elevation

@Composable
fun ButtonAppearance.Companion.primary(): ButtonAppearance =
    ButtonAppearance(
        default = Colors.Solid(
            backgroundColor = Theme.button.primary,
            textColor = Theme.button.textPrimary
        ),
        pressed = Colors.Solid(
            backgroundColor = Theme.button.primaryFocus,
            textColor = Theme.button.textPrimaryFocus
        ),
        disabled = Colors.Solid(
            backgroundColor = Theme.button.primaryDisabled,
            textColor = Theme.button.textPrimaryDisabled
        )
    )

@Composable
fun ButtonAppearance.Companion.secondary(): ButtonAppearance =
    ButtonAppearance(
        default = Colors.Solid(
            backgroundColor = Theme.button.secondary,
            textColor = Theme.text.secondary
        ),
        pressed = Colors.Solid(
            backgroundColor = Theme.button.secondary,
            textColor = Theme.button.textSecondaryFocus
        ),
        disabled = Colors.Solid(
            backgroundColor = Theme.button.secondaryDisabled,
            textColor = Theme.button.textSecondaryDisabled
        )
    )


@Composable
fun ButtonAppearance.Companion.ghost(): ButtonAppearance =
    ButtonAppearance(
        default = Colors.Solid(
            backgroundColor = Theme.main.transparent,
            textColor = Theme.text.secondary
        ),
        pressed = Colors.Solid(
            backgroundColor = Theme.button.secondary,
            textColor = Theme.button.textSecondaryFocus
        ),
        disabled = Colors.Solid(
            backgroundColor = Theme.button.secondaryDisabled,
            textColor = Theme.button.textSecondaryDisabled
        )
    )

@Composable
fun ButtonAppearance.Companion.gradient(): ButtonAppearance =
    ButtonAppearance(
        default = Colors.Gradient(
            backgroundBrush = Theme.button.backgroundGradient,
            textColor = Theme.button.textPrimary,
        ),
        pressed = Colors.Gradient(
            backgroundBrush = Theme.button.backgroundGradient,
            textColor = Theme.button.textPrimaryFocus
        ),
        disabled = Colors.Gradient(
            backgroundBrush = Theme.button.backgroundGradientDisabled,
            textColor = Theme.button.textPrimary
        ),
        shadowElevation = Elevation.tiny
    )

@Composable
fun ButtonAppearance.Companion.light(): ButtonAppearance =
    ButtonAppearance(
        default = Colors.Solid(
            backgroundColor = Theme.contrastInverted.low,
            textColor = Theme.button.textPrimary
        ),
        pressed = Colors.Solid(
            backgroundColor = Theme.button.secondary,
            textColor = Theme.button.textPrimaryFocus,
            borderColor = Theme.contrastInverted.lower
        ),
        disabled = Colors.Solid(
            backgroundColor = Theme.button.secondaryDisabled,
            textColor = Theme.button.textPrimaryDisabled
        )
    )

@Composable
fun ButtonAppearance.Companion.activity(): ButtonAppearance =
    ButtonAppearance(
        default = Colors.Solid(
            backgroundColor = Theme.button.activity,
            textColor = Theme.icon.link
        ),
        pressed = Colors.Solid(
            backgroundColor = Theme.main.primary,
            textColor = Theme.icon.invertedMain
        ),
        disabled = Colors.Solid(
            backgroundColor = Theme.button.activity,
            textColor = Theme.icon.link
        )
    )

