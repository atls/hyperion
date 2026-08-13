package com.atls.hyperion.ui.theme.tokens.borders

import androidx.compose.runtime.Immutable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp

@Immutable
data class Border(
    val width: Dp,
    val style: BorderStyle,
    val color: Color
)

enum class BorderStyle {
    Solid,
    Dashed
}

interface BorderStates {
    val default: Border
    val focused: Border
    val disabled: Border
}

interface PressableBorderStates : BorderStates {
    val pressed: Border
}
