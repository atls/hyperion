package com.atls.hyperion.ui.components.list.item.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.Dp

class TextListItemShape(
    val cornerRadius: Dp,
    val paddings: PaddingValues,
    val textPaddings: PaddingValues,
    val typography: TextStyle,
    val textAlign: TextAlign
) {
    companion object
}
