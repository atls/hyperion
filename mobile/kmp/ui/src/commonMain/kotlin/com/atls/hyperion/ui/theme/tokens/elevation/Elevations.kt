package com.atls.hyperion.ui.theme.tokens.elevation

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.theme.tokens.colors.Colors

class Elevations(colors: Colors) {
    val xs: PressableElevationStates = Xs(colors.elevation.xs, colors.action.subtle)
    val sm: PressableElevationStates = Sm(colors.elevation.sm, colors.action.subtle)
    val md: PressableElevationStates = Md(colors.elevation.md, colors.action.subtle)
    val lg: PressableElevationStates = Lg(colors.elevation.lg, colors.action.subtle)
    val modal: ElevationStates = Modal(colors.elevation.md)

    private class Xs(color: Color, focusedColor: Color) : PressableElevationStates {
        override val default = elevation(
            drop(color, offsetY = ShadowOffset.xs, blur = ShadowBlur.xs4)
        )
        override val focused = elevation(
            drop(
                color,
                offsetY = ShadowOffset.xs,
                blur = ShadowBlur.xs3,
                spread = ShadowSpread.xs
            ),
            drop(
                focusedColor,
                offsetX = ShadowOffset.xs,
                offsetY = ShadowOffset.md,
                blur = ShadowBlur.sm,
                spread = ShadowSpread.negativeSm
            )
        )
        override val pressed = elevation(
            inner(color, offsetY = ShadowOffset.xs, blur = ShadowBlur.xs5),
            drop(
                color,
                offsetY = ShadowOffset.xs,
                blur = ShadowBlur.xs5,
                spread = ShadowSpread.negativeXs
            )
        )
        override val disabled = elevation(
            drop(color, offsetY = ShadowOffset.xs, blur = ShadowBlur.xs5)
        )
    }

    private class Sm(color: Color, focusedColor: Color) : PressableElevationStates {
        override val default = elevation(
            drop(color, offsetY = ShadowOffset.sm, blur = ShadowBlur.sm)
        )
        override val focused = elevation(
            drop(
                color,
                offsetY = ShadowOffset.sm,
                blur = ShadowBlur.md,
                spread = ShadowSpread.xs
            ),
            drop(
                focusedColor,
                offsetX = ShadowOffset.xs,
                offsetY = ShadowOffset.lg,
                blur = ShadowBlur.md,
                spread = ShadowSpread.negativeSm
            )
        )
        override val pressed = elevation(
            inner(color, offsetY = ShadowOffset.xs, blur = ShadowBlur.xs4),
            drop(
                color,
                offsetY = ShadowOffset.xs,
                blur = ShadowBlur.xs3,
                spread = ShadowSpread.negativeSm
            )
        )
        override val disabled = elevation(
            drop(color, offsetY = ShadowOffset.xs, blur = ShadowBlur.xs4)
        )
    }

    private class Md(color: Color, focusedColor: Color) : PressableElevationStates {
        override val default = elevation(
            drop(color, offsetY = ShadowOffset.lg, blur = ShadowBlur.lg)
        )
        override val focused = elevation(
            drop(color, offsetY = ShadowOffset.lg, blur = ShadowBlur.xl),
            drop(
                focusedColor,
                offsetX = ShadowOffset.xs,
                offsetY = ShadowOffset.xl,
                blur = ShadowBlur.xl,
                spread = ShadowSpread.negativeLg
            )
        )
        override val pressed = elevation(
            inner(color, offsetY = ShadowOffset.xs, blur = ShadowBlur.xs3),
            drop(
                color,
                offsetY = ShadowOffset.sm,
                blur = ShadowBlur.sm,
                spread = ShadowSpread.negativeXs
            )
        )
        override val disabled = elevation(
            drop(color, offsetY = ShadowOffset.sm, blur = ShadowBlur.xs)
        )
    }

    private class Lg(color: Color, focusedColor: Color) : PressableElevationStates {
        override val default = elevation(
            drop(
                color,
                offsetY = ShadowOffset.xl,
                blur = ShadowBlur.lg,
                spread = ShadowSpread.negativeLg
            )
        )
        override val focused = elevation(
            drop(
                color,
                offsetY = ShadowOffset.xl2,
                blur = ShadowBlur.xl2,
                spread = ShadowSpread.negativeLg
            ),
            drop(
                focusedColor,
                offsetX = ShadowOffset.xs,
                offsetY = ShadowOffset.xl,
                blur = ShadowBlur.md,
                spread = ShadowSpread.negativeXs
            )
        )
        override val pressed = elevation(
            inner(color, offsetY = ShadowOffset.sm, blur = ShadowBlur.xs2),
            drop(
                color,
                offsetY = ShadowOffset.md,
                blur = ShadowBlur.md,
                spread = ShadowSpread.negativeLg
            )
        )
        override val disabled = elevation(
            drop(
                color,
                offsetY = ShadowOffset.md,
                blur = ShadowBlur.sm,
                spread = ShadowSpread.negativeMd
            )
        )
    }

    private class Modal(color: Color) : ElevationStates {
        override val default = elevation(
            drop(
                color,
                offsetY = ShadowOffset.xl3,
                blur = ShadowBlur.xl3,
                spread = ShadowSpread.negativeSm
            )
        )
    }
}

private fun elevation(vararg shadows: Shadow) = Elevation(shadows.toList())

private fun drop(
    color: Color,
    offsetX: Dp = ShadowOffset.none,
    offsetY: Dp,
    blur: Dp,
    spread: Dp = ShadowSpread.none
) = Shadow(
    type = ShadowType.Drop,
    offsetX = offsetX,
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
    offsetX = ShadowOffset.none,
    offsetY = offsetY,
    blur = blur,
    spread = ShadowSpread.none,
    color = color
)
