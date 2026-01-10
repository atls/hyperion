package com.atls.hyperion.ui.components.card.style.appearance

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.theme.tokens.Elevation

data class CardAppearance(
    val backgroundColor: Color,
    val borderColor: Color = Color.Transparent,
    val elevation: Dp = Elevation.zero
) {
    companion object
}
