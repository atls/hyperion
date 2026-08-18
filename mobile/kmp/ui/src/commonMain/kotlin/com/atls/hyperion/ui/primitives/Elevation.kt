package com.atls.hyperion.ui.primitives

import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.dropShadow
import androidx.compose.ui.draw.innerShadow
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.shadow.Shadow
import androidx.compose.ui.unit.DpOffset
import com.atls.hyperion.ui.theme.tokens.elevation.Elevation
import com.atls.hyperion.ui.theme.tokens.elevation.ShadowType

fun Modifier.elevation(
    elevation: Elevation,
    shape: Shape = RectangleShape
): Modifier = elevation.shadows.fold(this) { modifier, shadow ->
    when (shadow.type) {
        ShadowType.Drop -> modifier.dropShadow(
            shape = shape,
            shadow = shadow.toComposeShadow()
        )

        ShadowType.Inner -> modifier.innerShadow(
            shape = shape,
            shadow = shadow.toComposeShadow()
        )
    }
}

private fun com.atls.hyperion.ui.theme.tokens.elevation.Shadow.toComposeShadow() = Shadow(
    radius = blur,
    spread = spread,
    offset = DpOffset(offsetX, offsetY),
    color = color
)
