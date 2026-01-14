package com.atls.hyperion.ui.components.card.style.appearance

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.theme.tokens.layout.Elevation
import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

data class CardAppearance(
    val backgroundColor: Color,
    val borderColor: Color = ThemeColors.Palette.transparent,
    val elevation: Dp = Elevation.zero
) {
    companion object
}
