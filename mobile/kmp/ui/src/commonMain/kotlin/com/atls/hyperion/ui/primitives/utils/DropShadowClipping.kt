package com.atls.hyperion.ui.primitives.utils

import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawWithCache
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.drawOutline

internal fun Modifier.clearDropShadowInside(shape: Shape): Modifier = drawWithCache {
    val outline = shape.createOutline(size, layoutDirection, this)

    onDrawWithContent {
        drawOutline(
            outline = outline,
            color = Color.Black,
            blendMode = BlendMode.Clear
        )
        drawContent()
    }
}
