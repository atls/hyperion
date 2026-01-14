package com.atls.hyperion.ui.components.input.style.appearance

import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.theme.tokens.colors.ColorSet
import com.atls.hyperion.ui.theme.tokens.colors.Colors as ThemeColors

data class Colors(
    val backgroundColor: Color,
    val textColor: Color,
    val borderColor: Color = ThemeColors.Palette.transparent,
    val cursorColor: Color = textColor
) {
    companion object {
        fun fromColorSet(colorSet: ColorSet): Colors = Colors(
            backgroundColor = colorSet.background,
            textColor = colorSet.font,
            borderColor = colorSet.border
        )
    }
}
