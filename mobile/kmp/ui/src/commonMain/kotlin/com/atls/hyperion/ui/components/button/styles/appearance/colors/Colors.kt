package com.atls.hyperion.ui.components.button.styles.appearance.colors

import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color

sealed class Colors(
    val textColor: Color,
    val borderColor: Color = Color.Transparent
) {
    class Solid(
        val backgroundColor: Color,
        textColor: Color,
        borderColor: Color = Color.Transparent
    ) : Colors(textColor, borderColor)

    class Gradient(
        val backgroundBrush: Brush,
        textColor: Color,
        borderColor: Color = Color.Transparent
    ) : Colors(textColor, borderColor)
}

