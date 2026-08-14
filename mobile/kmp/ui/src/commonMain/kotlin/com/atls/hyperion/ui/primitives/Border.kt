package com.atls.hyperion.ui.primitives

import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawWithCache
import androidx.compose.ui.graphics.Outline
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.PathEffect
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.clipPath
import androidx.compose.ui.unit.dp
import com.atls.hyperion.ui.theme.tokens.borders.Border
import com.atls.hyperion.ui.theme.tokens.borders.BorderStyle
import com.atls.hyperion.ui.theme.tokens.borders.DASH_GAP_MULTIPLIER
import com.atls.hyperion.ui.theme.tokens.borders.DASH_LENGTH_MULTIPLIER
import androidx.compose.foundation.border as composeBorder

fun Modifier.border(border: Border, shape: Shape): Modifier {
    if (border.width <= 0.dp) return this

    return when (border.style) {
        BorderStyle.Solid -> composeBorder(
            width = border.width,
            color = border.color,
            shape = shape
        )

        BorderStyle.Dashed -> drawWithCache {
            val strokeWidth = border.width.toPx()
            val outline = shape.createOutline(size, layoutDirection, this)
            val path = when (outline) {
                is Outline.Generic -> outline.path
                is Outline.Rounded -> Path().apply { addRoundRect(outline.roundRect) }
                is Outline.Rectangle -> Path().apply { addRect(outline.rect) }
            }
            val pathEffect = PathEffect.dashPathEffect(
                intervals = floatArrayOf(
                    strokeWidth * DASH_LENGTH_MULTIPLIER,
                    strokeWidth * DASH_GAP_MULTIPLIER
                )
            )

            onDrawWithContent {
                drawContent()
                clipPath(path) {
                    drawPath(
                        path = path,
                        color = border.color,
                        style = Stroke(
                            width = strokeWidth * 2,
                            pathEffect = pathEffect
                        )
                    )
                }
            }
        }
    }
}
