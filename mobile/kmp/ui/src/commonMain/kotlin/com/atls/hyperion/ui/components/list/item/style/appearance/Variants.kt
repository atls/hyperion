package com.atls.hyperion.ui.components.list.item.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.LegacyColors

@Composable
fun TextListItemAppearance.Companion.default(): TextListItemAppearance =
    TextListItemAppearance(
        selected = TextListItemAppearanceColors(
            backgroundColor = LegacyColors.Palette.blueProtective,
            textColor = LegacyColors.Text.white
        ),
        unselected = TextListItemAppearanceColors(
            backgroundColor = LegacyColors.Palette.white,
            textColor = LegacyColors.Text.black
        )
    )
