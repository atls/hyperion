package com.atls.hyperion.ui.components.progress.styles.appearance

import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

fun ProgressAppearance.Companion.primary(): ProgressAppearance =
    ProgressAppearance(
        colors = Colors.Single.Solid(
            strokeColor = ThemeColors.Palette.blueProtective,
            trailColor = ThemeColors.Palette.gray
        )
    )
