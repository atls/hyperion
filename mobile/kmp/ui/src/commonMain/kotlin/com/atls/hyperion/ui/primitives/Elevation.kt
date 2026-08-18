package com.atls.hyperion.ui.primitives

import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.graphics.Shape
import com.adamglin.composeshadow.dropShadow
import com.adamglin.composeshadow.innerShadow
import com.atls.hyperion.ui.theme.tokens.elevation.Elevation
import com.atls.hyperion.ui.theme.tokens.elevation.ShadowType

fun Modifier.elevation(
    elevation: Elevation,
    shape: Shape = RectangleShape
): Modifier = elevation.shadows.fold(this) { modifier, shadow ->
    when (shadow.type) {
        ShadowType.Drop -> modifier.dropShadow(
            shape = shape,
            color = shadow.color,
            offsetX = shadow.offsetX,
            offsetY = shadow.offsetY,
            blur = shadow.blur,
            spread = shadow.spread
        )

        ShadowType.Inner -> modifier.innerShadow(
            shape = shape,
            color = shadow.color,
            offsetX = shadow.offsetX,
            offsetY = shadow.offsetY,
            blur = shadow.blur,
            spread = shadow.spread
        )
    }
}
