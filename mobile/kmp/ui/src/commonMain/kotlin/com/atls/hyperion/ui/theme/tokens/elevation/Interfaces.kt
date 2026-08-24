package com.atls.hyperion.ui.theme.tokens.elevation

import androidx.compose.runtime.Immutable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp

data class Elevation(
    val shadows: List<Shadow>
)

@Immutable
data class Shadow(
    val type: ShadowType,
    val offsetX: Dp,
    val offsetY: Dp,
    val blur: Dp,
    val spread: Dp,
    val color: Color
)

enum class ShadowType {
    Drop,
    Inner
}

interface ElevationStates {
    val default: Elevation
}

interface PressableElevationStates : ElevationStates {
    val focused: Elevation
    val pressed: Elevation
    val disabled: Elevation
}
