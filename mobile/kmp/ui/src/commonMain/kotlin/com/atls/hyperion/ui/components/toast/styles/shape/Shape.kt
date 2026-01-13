package com.atls.hyperion.ui.components.toast.styles.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.theme.tokens.Elevation

data class ToastShape(
    val cornerRadius: Dp,
    val paddings: PaddingValues,
    val typography: TextStyle,
    val borderStroke: Dp,
    val elevation: Dp = Elevation.zero
) {
    companion object
}
