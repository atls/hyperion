package com.atls.hyperion.ui.primitives.utils

import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawWithCache
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.graphics.Paint
import androidx.compose.ui.graphics.drawscope.drawIntoCanvas
import com.atls.hyperion.ui.theme.tokens.elevation.Shadow
import kotlin.math.abs

internal fun Modifier.isolateDropShadows(shadows: List<Shadow>): Modifier {
    if (shadows.isEmpty()) return this

    return drawWithCache {
        val layerPadding = shadows.maxOf { shadow ->
            shadow.blur.toPx() + shadow.spread.toPx() + maxOf(
                abs(shadow.offsetX.toPx()),
                abs(shadow.offsetY.toPx())
            )
        }.coerceAtLeast(0f)
        val layerBounds = Rect(0f, 0f, size.width, size.height).inflate(layerPadding)
        val layerPaint = Paint()

        onDrawWithContent {
            drawIntoCanvas { canvas -> canvas.saveLayer(layerBounds, layerPaint) }
            drawContent()
            drawIntoCanvas { canvas -> canvas.restore() }
        }
    }
}
