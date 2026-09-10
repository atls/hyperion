package com.atls.hyperion.ui.components.switch.styles.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.theme.tokens.elevation.Elevation

data class SwitchShape(
    val width: Dp,
    val thumbSize: Dp,
    val paddings: PaddingValues,
    val cornerRadius: Dp,
    val borderWidth: Dp,
    val elevation: Elevation,
) {
    companion object
}
