package com.atls.hyperion.ui.theme.tokens.colors

import androidx.compose.runtime.Immutable
import androidx.compose.ui.graphics.Color

@Immutable
data class Colors(
    val action: ActionColors,
    val surface: SurfaceColors,
    val text: TextColors,
    val status: StatusColors,
    val elevation: ElevationColors
)

@Immutable
data class ActionColors(
    val base: Color,
    val hover: Color,
    val pressed: Color,
    val disabled: Color,
    val subtle: Color
)

@Immutable
data class SurfaceColors(
    val base: Color,
    val subtle: Color,
    val muted: Color,
    val soft: Color,
    val inverse: Color
)

@Immutable
data class TextColors(
    val primary: Color,
    val secondary: Color,
    val tertiary: Color,
    val muted: Color,
    val inverse: Color,
)

@Immutable
data class StatusColors(
    val success: Color,
    val warning: Color,
    val error: Color,
    val info: Color
)

@Immutable
data class ElevationColors(
    val xs: Color,
    val sm: Color,
    val md: Color,
    val lg: Color
)
