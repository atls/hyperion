package com.atls.hyperion.ui.components.button.styles.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.Dp

data class ButtonShape(
    val cornerRadius: Dp,
    val paddings: PaddingValues,
    val typography: TextStyle,
    val borderStroke: Dp
) {
    companion object Companion
}
