package com.atls.hyperion.ui.components.checkbox.styles.appearance

import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

fun CheckboxAppearance.Companion.blue(): CheckboxAppearance =
    CheckboxAppearance(
        default = Colors(
            backgroundColor = ThemeColors.Checkbox.Blue.Default.background,
            borderColor = ThemeColors.Checkbox.Blue.Default.border,
            checkColor = ThemeColors.Checkbox.Blue.Default.font
        ),
        checked = Colors(
            backgroundColor = ThemeColors.Checkbox.Blue.Default.background,
            borderColor = ThemeColors.Checkbox.Blue.Default.border,
            checkColor = ThemeColors.Checkbox.Blue.Default.font
        ),
        disabled = Colors(
            backgroundColor = ThemeColors.Checkbox.Blue.Default.background,
            borderColor = ThemeColors.Checkbox.Blue.Default.border,
            checkColor = ThemeColors.Checkbox.Blue.Default.font
        )
    )

fun CheckboxAppearance.Companion.green(): CheckboxAppearance =
    CheckboxAppearance(
        default = Colors(
            backgroundColor = ThemeColors.Checkbox.Green.Default.background,
            borderColor = ThemeColors.Checkbox.Green.Default.border,
            checkColor = ThemeColors.Checkbox.Green.Default.font
        ),
        checked = Colors(
            backgroundColor = ThemeColors.Checkbox.Green.Default.background,
            borderColor = ThemeColors.Checkbox.Green.Default.border,
            checkColor = ThemeColors.Checkbox.Green.Default.font
        ),
        disabled = Colors(
            backgroundColor = ThemeColors.Checkbox.Green.Default.background,
            borderColor = ThemeColors.Checkbox.Green.Default.border,
            checkColor = ThemeColors.Checkbox.Green.Default.font
        )
    )

fun CheckboxAppearance.Companion.red(): CheckboxAppearance =
    CheckboxAppearance(
        default = Colors(
            backgroundColor = ThemeColors.Checkbox.Red.Default.background,
            borderColor = ThemeColors.Checkbox.Red.Default.border,
            checkColor = ThemeColors.Checkbox.Red.Default.font
        ),
        checked = Colors(
            backgroundColor = ThemeColors.Checkbox.Red.Default.background,
            borderColor = ThemeColors.Checkbox.Red.Default.border,
            checkColor = ThemeColors.Checkbox.Red.Default.font
        ),
        disabled = Colors(
            backgroundColor = ThemeColors.Checkbox.Red.Default.background,
            borderColor = ThemeColors.Checkbox.Red.Default.border,
            checkColor = ThemeColors.Checkbox.Red.Default.font
        )
    )
