package com.atls.hyperion.ui.components.progress

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.drawscope.Stroke
import com.atls.hyperion.ui.components.progress.config.DEFAULT_CANVAS_SCALE
import com.atls.hyperion.ui.components.progress.config.DEFAULT_GAP_DEGREE
import com.atls.hyperion.ui.components.progress.config.FULL_CIRCLE
import com.atls.hyperion.ui.components.progress.config.GAP_BOTTOM_OFFSET
import com.atls.hyperion.ui.components.progress.config.GAP_LEFT_OFFSET
import com.atls.hyperion.ui.components.progress.config.GAP_RIGHT_OFFSET
import com.atls.hyperion.ui.components.progress.config.GAP_TOP_OFFSET
import com.atls.hyperion.ui.components.progress.config.MAX_PERCENT
import com.atls.hyperion.ui.components.progress.config.MIN_PERCENT
import com.atls.hyperion.ui.components.progress.model.GapPosition
import com.atls.hyperion.ui.components.progress.styles.appearance.ProgressAppearance
import com.atls.hyperion.ui.components.progress.styles.appearance.primary
import com.atls.hyperion.ui.components.progress.styles.shape.ProgressShape
import com.atls.hyperion.ui.components.progress.styles.shape.default
import com.atls.hyperion.ui.components.progress.ui.getBrush
import com.atls.hyperion.ui.components.progress.ui.getSolidColor

@Composable
fun CircleProgress(
    percents: List<Float>,
    modifier: Modifier = Modifier,
    appearance: ProgressAppearance = ProgressAppearance.primary(),
    shape: ProgressShape = ProgressShape.default(),
    gapDegree: Float = DEFAULT_GAP_DEGREE,
    gapPosition: GapPosition = GapPosition.Top
) {
    Canvas(modifier = modifier.size(shape.strokeWidth * DEFAULT_CANVAS_SCALE)) {
        val strokeWidth = shape.strokeWidth.toPx()
        val trailWidth = shape.trailWidth.toPx()
        val diameter = size.minDimension - maxOf(strokeWidth, trailWidth)
        val topLeft = Offset((size.width - diameter) / 2, (size.height - diameter) / 2)
        val totalSweep = FULL_CIRCLE - gapDegree

        val startOffset = when (gapPosition) {
            GapPosition.Top -> GAP_TOP_OFFSET + gapDegree / 2
            GapPosition.Bottom -> GAP_BOTTOM_OFFSET + gapDegree / 2
            GapPosition.Left -> GAP_LEFT_OFFSET + gapDegree / 2
            GapPosition.Right -> GAP_RIGHT_OFFSET + gapDegree / 2
        }

        drawArc(
            color = appearance.colors.trailColor,
            startAngle = startOffset,
            sweepAngle = totalSweep,
            useCenter = false,
            topLeft = topLeft,
            size = Size(diameter, diameter),
            style = Stroke(width = trailWidth, cap = shape.trailLinecap)
        )

        var currentStart = startOffset
        percents.forEachIndexed { index, percent ->
            val sweep = if (percent >= 100f) totalSweep else (
                percent.coerceIn(MIN_PERCENT, MAX_PERCENT) / MAX_PERCENT) * totalSweep
            if (sweep <= 0f) return@forEachIndexed

            val brush = getBrush(appearance.colors, index)
            if (brush != null) {
                drawArc(
                    brush = brush,
                    startAngle = currentStart,
                    sweepAngle = sweep,
                    useCenter = false,
                    topLeft = topLeft,
                    size = Size(diameter, diameter),
                    style = Stroke(width = strokeWidth, cap = shape.strokeLinecap)
                )
            } else {
                drawArc(
                    color = getSolidColor(appearance.colors, index),
                    startAngle = currentStart,
                    sweepAngle = sweep,
                    useCenter = false,
                    topLeft = topLeft,
                    size = Size(diameter, diameter),
                    style = Stroke(width = strokeWidth, cap = shape.strokeLinecap)
                )
            }
            currentStart += sweep
        }
    }
}

@Composable
fun CircleProgress(
    percent: Float,
    modifier: Modifier = Modifier,
    appearance: ProgressAppearance = ProgressAppearance.primary(),
    shape: ProgressShape = ProgressShape.default(),
    gapDegree: Float = 0f,
    gapPosition: GapPosition = GapPosition.Top
) = CircleProgress(listOf(percent), modifier, appearance, shape, gapDegree, gapPosition)
