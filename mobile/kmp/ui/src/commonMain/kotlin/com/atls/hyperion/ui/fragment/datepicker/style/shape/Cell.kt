package com.atls.hyperion.ui.fragment.datepicker.style.shape

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.theme.tokens.layout.BorderStroke

data class CellShape(
    val spacing: Dp,
    val padding: Dp,
    val borderWidth: Dp = BorderStroke.none,
    val borderColor: Color = Color.Transparent,
    val shape: Shape,
    val activeShape: Shape = shape,
    val rangeShape: Shape = RectangleShape,
    val typography: TextStyle,
    val headerTypography: TextStyle
) {
    companion object
}
