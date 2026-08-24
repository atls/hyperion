package com.atls.hyperion.ui.primitives

import androidx.compose.foundation.background
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.dropShadow
import androidx.compose.ui.draw.innerShadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.graphics.Shape
import com.atls.hyperion.ui.primitives.utils.clearDropShadowInside
import com.atls.hyperion.ui.primitives.utils.isolateDropShadows
import com.atls.hyperion.ui.primitives.utils.toComposeShadow
import com.atls.hyperion.ui.theme.tokens.elevation.Elevation
import com.atls.hyperion.ui.theme.tokens.elevation.ShadowType

fun Modifier.elevation(
    elevation: Elevation,
    backgroundColor: Color,
    shape: Shape = RectangleShape
): Modifier {
    val dropShadows = elevation.shadows.filter { it.type == ShadowType.Drop }
    val withDropShadows = dropShadows.fold(isolateDropShadows(dropShadows)) { modifier, shadow ->
        modifier.dropShadow(
            shape = shape,
            shadow = shadow.toComposeShadow(backgroundColor.alpha)
        )
    }
    val withoutDropShadowInside = if (dropShadows.isEmpty()) {
        withDropShadows
    } else {
        withDropShadows.clearDropShadowInside(shape)
    }

    val withBackground = withoutDropShadowInside.background(backgroundColor, shape)

    return elevation.shadows.fold(withBackground) { modifier, shadow ->
        if (shadow.type == ShadowType.Inner) {
            modifier.innerShadow(
                shape = shape,
                shadow = shadow.toComposeShadow(backgroundColor.alpha)
            )
        } else {
            modifier
        }
    }
}
