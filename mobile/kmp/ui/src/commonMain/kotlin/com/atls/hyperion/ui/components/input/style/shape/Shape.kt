package com.atls.hyperion.ui.components.input.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.theme.tokens.layout.Space

data class InputShape(
    val cornerRadius: Dp,
    val borderStroke: Dp,
    val paddings: PaddingValues,
    val textPaddings: PaddingValues = PaddingValues(Space.zero),
    val typography: TextStyle
) {
    companion object Companion
}
