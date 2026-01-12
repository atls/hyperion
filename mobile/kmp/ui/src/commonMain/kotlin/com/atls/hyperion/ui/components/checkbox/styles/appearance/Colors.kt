package com.atls.hyperion.ui.components.checkbox.styles.appearance

import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

data class Colors(
    val backgroundColor: Color,
    val borderColor: Color = ThemeColors.Palette.transparent,
    val checkColor: Color
)
