package com.atls.hyperion.ui.components.checkbox.styles.appearance

import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

fun CheckboxAppearance.Companion.blue(): CheckboxAppearance =
    CheckboxAppearance(
        default = Colors(
            backgroundColor = ThemeColors.Palette.transparent,
            borderColor = ThemeColors.Palette.blue,
            checkColor = ThemeColors.Palette.blue
        ),
        checked = Colors(
            backgroundColor = ThemeColors.Palette.transparent,
            borderColor = ThemeColors.Palette.blue,
            checkColor = ThemeColors.Palette.blue
        ),
        disabled = Colors(
            backgroundColor = ThemeColors.Palette.transparent,
            borderColor = ThemeColors.Palette.blue,
            checkColor = ThemeColors.Palette.blue
        )
    )

fun CheckboxAppearance.Companion.green(): CheckboxAppearance =
    CheckboxAppearance(
        default = Colors(
            backgroundColor = ThemeColors.Palette.transparent,
            borderColor = ThemeColors.Palette.green,
            checkColor = ThemeColors.Palette.green
        ),
        checked = Colors(
            backgroundColor = ThemeColors.Palette.transparent,
            borderColor = ThemeColors.Palette.green,
            checkColor = ThemeColors.Palette.green
        ),
        disabled = Colors(
            backgroundColor = ThemeColors.Palette.transparent,
            borderColor = ThemeColors.Palette.green,
            checkColor = ThemeColors.Palette.green
        )
    )

fun CheckboxAppearance.Companion.red(): CheckboxAppearance =
    CheckboxAppearance(
        default = Colors(
            backgroundColor = ThemeColors.Palette.transparent,
            borderColor = ThemeColors.Palette.red,
            checkColor = ThemeColors.Palette.red
        ),
        checked = Colors(
            backgroundColor = ThemeColors.Palette.transparent,
            borderColor = ThemeColors.Palette.red,
            checkColor = ThemeColors.Palette.red
        ),
        disabled = Colors(
            backgroundColor = ThemeColors.Palette.transparent,
            borderColor = ThemeColors.Palette.red,
            checkColor = ThemeColors.Palette.red
        )
    )
