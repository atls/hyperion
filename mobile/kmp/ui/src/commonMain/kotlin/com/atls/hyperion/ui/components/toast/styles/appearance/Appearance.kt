package com.atls.hyperion.ui.components.toast.styles.appearance

import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

data class ToastAppearance(
    val backgroundColor: Color,
    val textColor: Color,
    val borderColor: Color = ThemeColors.Palette.transparent
) {
    companion object
}
