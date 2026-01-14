package com.atls.hyperion.ui.components.button.styles.appearance

import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

sealed class Colors(
    val textColor: Color,
    val borderColor: Color = ThemeColors.Palette.transparent
) {
    class Solid(
        val backgroundColor: Color,
        textColor: Color,
        borderColor: Color = ThemeColors.Palette.transparent
    ) : Colors(textColor, borderColor)

    class Gradient(
        val backgroundBrush: Brush,
        textColor: Color,
        borderColor: Color = ThemeColors.Palette.transparent
    ) : Colors(textColor, borderColor)
}
