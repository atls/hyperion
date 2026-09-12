package com.atls.hyperion.ui.components.input.styles.appearance

import androidx.compose.ui.graphics.Color

data class Colors(
    val backgroundColor: Color,
    val textColor: Color,
    val borderColor: Color = Color.Transparent,
    val cursorColor: Color = textColor
)
