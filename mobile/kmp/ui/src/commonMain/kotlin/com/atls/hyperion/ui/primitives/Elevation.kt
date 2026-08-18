package com.atls.hyperion.ui.primitives

import androidx.compose.foundation.background
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.dropShadow
import androidx.compose.ui.draw.innerShadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.shadow.Shadow
import androidx.compose.ui.unit.DpOffset
import com.atls.hyperion.ui.theme.tokens.elevation.Elevation
import com.atls.hyperion.ui.theme.tokens.elevation.ShadowType

fun Modifier.elevation(
    elevation: Elevation,
    backgroundColor: Color,
    shape: Shape = RectangleShape
): Modifier {
    val withDropShadows = elevation.shadows.fold(this) { modifier, shadow ->
        if (shadow.type == ShadowType.Drop) {
            modifier.dropShadow(
                shape = shape,
                shadow = shadow.toComposeShadow()
            )
        } else {
            modifier
        }
    }

    val withBackground = withDropShadows.background(backgroundColor, shape)

    return elevation.shadows.fold(withBackground) { modifier, shadow ->
        if (shadow.type == ShadowType.Inner) {
            modifier.innerShadow(
                shape = shape,
                shadow = shadow.toComposeShadow()
            )
        } else {
            modifier
        }
    }
}

private fun com.atls.hyperion.ui.theme.tokens.elevation.Shadow.toComposeShadow() = Shadow(
    radius = blur,
    spread = spread,
    offset = DpOffset(offsetX, offsetY),
    color = color
)
