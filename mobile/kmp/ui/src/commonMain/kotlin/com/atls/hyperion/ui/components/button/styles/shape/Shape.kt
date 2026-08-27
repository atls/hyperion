package com.atls.hyperion.ui.components.button.styles.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.theme.tokens.elevation.PressableElevationStates

data class ButtonShape(
    val minHeight: Dp,
    val cornerRadius: Dp,
    val paddings: PaddingValues,
    val typography: TextStyle,
    val borderWidth: Dp,
    val gap: Dp,
    val addonSize: Dp,
    val elevations: PressableElevationStates
) {
    companion object Companion
}
