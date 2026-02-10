package com.atls.hyperion.ui.components.placeholder.styles.appearance

import com.atls.hyperion.ui.theme.tokens.colors.Colors

fun PlaceholderAppearance.Companion.imageBox(): PlaceholderAppearance =
    PlaceholderAppearance(
        backgroundColor = Colors.Palette.lightPurple,
        iconColor = Colors.Text.darkGray,
        textColor = Colors.Text.black

    )

fun PlaceholderAppearance.Companion.logo(): PlaceholderAppearance =
    PlaceholderAppearance(
        backgroundColor = Colors.Palette.transparent,
        iconColor = Colors.Text.black,
        textColor = Colors.Text.black
    )
