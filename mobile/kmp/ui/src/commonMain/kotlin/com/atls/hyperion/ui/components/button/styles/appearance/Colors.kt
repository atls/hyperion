package com.atls.hyperion.ui.components.button.styles.appearance

import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color

sealed interface Colors {
    val content: Color
    val border: Color

    data class Solid(
        val background: Color,
        override val content: Color,
        override val border: Color = Color.Transparent
    ) : Colors

    data class Gradient(
        val background: Brush,
        override val content: Color,
        override val border: Color = Color.Transparent,
        val backgroundAlpha: Float = 1f
    ) : Colors
}
