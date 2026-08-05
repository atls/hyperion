package com.atls.hyperion.ui.components.placeholder.styles.appearance

import com.atls.hyperion.ui.theme.tokens.colors.LegacyColors

fun PlaceholderAppearance.Companion.imageBox(): PlaceholderAppearance =
    PlaceholderAppearance(
        backgroundColor = LegacyColors.Palette.lightPurple,
        iconColor = LegacyColors.Text.darkGray,
        textColor = LegacyColors.Text.black

    )

fun PlaceholderAppearance.Companion.logo(): PlaceholderAppearance =
    PlaceholderAppearance(
        backgroundColor = LegacyColors.Palette.transparent,
        iconColor = LegacyColors.Text.black,
        textColor = LegacyColors.Text.black
    )
