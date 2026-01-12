package com.atls.hyperion.ui.components.switch.styles.appearance

import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

fun SwitchAppearance.Companion.default(): SwitchAppearance =
    SwitchAppearance(
        default = Colors(
            trackColor = ThemeColors.Palette.transparent,
            trackBorderColor = ThemeColors.Palette.blue,
            thumbColor = ThemeColors.Palette.blue,
            thumbBorderColor = ThemeColors.Palette.blue
        ),
        disabled = Colors(
            trackColor = ThemeColors.Palette.transparent,
            trackBorderColor = ThemeColors.Palette.blue,
            thumbColor = ThemeColors.Palette.transparent,
            thumbBorderColor = ThemeColors.Palette.blue
        )
    )
