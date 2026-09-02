package com.atls.hyperion.ui.components.input.styles.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.theme.tokens.elevation.PressableElevationStates

data class InputShape(
    val minWidth: Dp,
    val minHeight: Dp,
    val cornerRadius: Dp,
    val borderWidth: Dp,
    val paddings: PaddingValues,
    val typography: TextStyle,
    val elevations: PressableElevationStates
) {
    companion object Companion
}
