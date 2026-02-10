package com.atls.hyperion.ui.components.progress.lib

import androidx.compose.ui.graphics.Brush
import com.atls.hyperion.ui.components.progress.styles.appearance.Colors
import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

fun getBrush(colors: Colors, index: Int): Brush? = when (colors) {
    is Colors.Single.Gradient -> colors.strokeBrush
    is Colors.Multiple.Gradient -> colors.strokeBrushes.getOrElse(index) {
        Brush.linearGradient(
            listOf(
                ThemeColors.Palette.transparent,
                ThemeColors.Palette.transparent
            )
        )
    }

    else -> null
}
