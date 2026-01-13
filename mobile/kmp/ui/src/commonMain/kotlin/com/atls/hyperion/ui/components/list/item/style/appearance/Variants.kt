package com.atls.hyperion.ui.components.list.item.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.Colors

@Composable
fun TextListItemAppearance.Companion.default(): TextListItemAppearance =
    TextListItemAppearance(
        selected = TextListItemAppearanceColors(
            backgroundColor = Colors.Palette.blueProtective,
            textColor = Colors.Text.white
        ),
        unselected = TextListItemAppearanceColors(
            backgroundColor = Colors.Palette.white,
            textColor = Colors.Text.black
        )
    )
