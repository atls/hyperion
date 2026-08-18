package com.atls.hyperion.ui.theme.tokens.elevation

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.atls.hyperion.ui.theme.tokens.colors.ElevationColors

class Elevations(colors: ElevationColors) {
    val xs: PressableElevationStates = Xs(colors.xs)
    val sm: PressableElevationStates = Sm(colors.sm)
    val md: PressableElevationStates = Md(colors.md)
    val lg: PressableElevationStates = Lg(colors.lg)
    val modal: ElevationStates = Modal(colors.md)

    private class Xs(color: Color) : PressableElevationStates {
        override val default = elevation(drop(color, offsetY = 1.dp, blur = 2.dp))
        override val pressed = elevation(
            inner(color, offsetY = 1.dp, blur = 1.dp),
            drop(color, offsetY = 1.dp, blur = 1.dp, spread = (-1).dp)
        )
        override val disabled = elevation(drop(color, offsetY = 1.dp, blur = 1.dp))
    }

    private class Sm(color: Color) : PressableElevationStates {
        override val default = elevation(drop(color, offsetY = 2.dp, blur = 6.dp))
        override val pressed = elevation(
            inner(color, offsetY = 1.dp, blur = 2.dp),
            drop(color, offsetY = 1.dp, blur = 3.dp, spread = (-2).dp)
        )
        override val disabled = elevation(drop(color, offsetY = 1.dp, blur = 2.dp))
    }

    private class Md(color: Color) : PressableElevationStates {
        override val default = elevation(drop(color, offsetY = 4.dp, blur = 12.dp))
        override val pressed = elevation(
            inner(color, offsetY = 1.dp, blur = 3.dp),
            drop(color, offsetY = 2.dp, blur = 6.dp, spread = (-1).dp)
        )
        override val disabled = elevation(drop(color, offsetY = 2.dp, blur = 5.dp))
    }

    private class Lg(color: Color) : PressableElevationStates {
        override val default = elevation(
            drop(color, offsetY = 6.dp, blur = 12.dp, spread = (-4).dp)
        )
        override val pressed = elevation(
            inner(color, offsetY = 2.dp, blur = 4.dp),
            drop(color, offsetY = 3.dp, blur = 8.dp, spread = (-4).dp)
        )
        override val disabled = elevation(
            drop(color, offsetY = 3.dp, blur = 6.dp, spread = (-3).dp)
        )
    }

    private class Modal(color: Color) : ElevationStates {
        override val default = elevation(
            drop(color, offsetY = 12.dp, blur = 20.dp, spread = (-2).dp)
        )
    }
}

private fun elevation(vararg shadows: Shadow) = Elevation(shadows.toList())

private fun drop(
    color: Color,
    offsetY: Dp,
    blur: Dp,
    spread: Dp = 0.dp
) = Shadow(
    type = ShadowType.Drop,
    offsetX = 0.dp,
    offsetY = offsetY,
    blur = blur,
    spread = spread,
    color = color
)

private fun inner(
    color: Color,
    offsetY: Dp,
    blur: Dp
) = Shadow(
    type = ShadowType.Inner,
    offsetX = 0.dp,
    offsetY = offsetY,
    blur = blur,
    spread = 0.dp,
    color = color
)
