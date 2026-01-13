package com.atls.hyperion.ui.components.progress.ui

import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.components.progress.styles.appearance.Colors
import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

fun getSolidColor(colors: Colors, index: Int): Color = when (colors) {
    is Colors.Single.Solid -> colors.strokeColor
    is Colors.Multiple.Solid -> colors.strokeColors.getOrElse(index) { ThemeColors.Palette.transparent }
    else -> ThemeColors.Palette.transparent
}
