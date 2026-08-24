package com.atls.hyperion.ui.primitives

import androidx.compose.foundation.background
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.dropShadow
import androidx.compose.ui.draw.innerShadow
import androidx.compose.ui.graphics.*
import com.atls.hyperion.ui.primitives.utils.clearDropShadowInside
import com.atls.hyperion.ui.primitives.utils.isolateDropShadows
import com.atls.hyperion.ui.primitives.utils.toComposeShadow
import com.atls.hyperion.ui.theme.tokens.elevation.Elevation
import com.atls.hyperion.ui.theme.tokens.elevation.ShadowType

fun Modifier.elevation(
    elevation: Elevation,
    backgroundColor: Color,
    shape: Shape = RectangleShape
): Modifier = elevation(
    elevation = elevation,
    backgroundBrush = SolidColor(backgroundColor),
    shape = shape
)

fun Modifier.elevation(
    elevation: Elevation,
    backgroundBrush: Brush,
    shape: Shape = RectangleShape,
    backgroundAlpha: Float = 1f
): Modifier {
    val fillAlpha = backgroundAlpha * when (backgroundBrush) {
        is SolidColor -> backgroundBrush.value.alpha
        else -> 1f
    }
    val dropShadows = elevation.shadows.filter { it.type == ShadowType.Drop }
    val withDropShadows = dropShadows.fold(isolateDropShadows(dropShadows)) { modifier, shadow ->
        modifier.dropShadow(
            shape = shape,
            shadow = shadow.toComposeShadow(fillAlpha)
        )
    }
    val withoutDropShadowInside = if (dropShadows.isEmpty()) {
        withDropShadows
    } else {
        withDropShadows.clearDropShadowInside(shape)
    }

    val withBackground = withoutDropShadowInside.background(
        brush = backgroundBrush,
        shape = shape,
        alpha = backgroundAlpha
    )

    return elevation.shadows.fold(withBackground) { modifier, shadow ->
        if (shadow.type == ShadowType.Inner) {
            modifier.innerShadow(
                shape = shape,
                shadow = shadow.toComposeShadow(fillAlpha)
            )
        } else {
            modifier
        }
    }
}
