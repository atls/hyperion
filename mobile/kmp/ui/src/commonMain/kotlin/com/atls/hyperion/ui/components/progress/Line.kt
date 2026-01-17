package com.atls.hyperion.ui.components.progress

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import com.atls.hyperion.ui.components.progress.config.MAX_PERCENT
import com.atls.hyperion.ui.components.progress.config.MAX_WEIGHT
import com.atls.hyperion.ui.components.progress.config.MIN_WEIGHT
import com.atls.hyperion.ui.components.progress.lib.getBrush
import com.atls.hyperion.ui.components.progress.lib.getSolidColor
import com.atls.hyperion.ui.components.progress.styles.appearance.ProgressAppearance
import com.atls.hyperion.ui.components.progress.styles.shape.ProgressShape
import com.atls.hyperion.ui.components.progress.styles.shape.default

@Composable
fun LineProgress(
    percents: List<Float>,
    modifier: Modifier = Modifier,
    appearance: ProgressAppearance,
    shape: ProgressShape = ProgressShape.default()
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .height(shape.trailWidth)
            .clip(shape.shape)
            .background(appearance.colors.trailColor)
    ) {
        var accumulated = MIN_WEIGHT

        percents.forEachIndexed { index, percent ->
            if (percent <= MIN_WEIGHT) return@forEachIndexed

            val segmentWeight = (percent / MAX_PERCENT).coerceAtMost(MAX_WEIGHT - accumulated)
            if (segmentWeight <= MIN_WEIGHT) return@forEachIndexed

            val brush = getBrush(appearance.colors, index)
            val color = getSolidColor(appearance.colors, index)

            Box(
                Modifier
                    .height(shape.strokeWidth)
                    .weight(segmentWeight)
                    .then(
                        brush?.let { Modifier.background(it) }
                            ?: Modifier.background(color)
                    )
            )

            accumulated += segmentWeight
        }

        if (accumulated < MAX_WEIGHT) {
            Spacer(Modifier.weight(MAX_WEIGHT - accumulated))
        }
    }
}

@Composable
fun LineProgress(
    percent: Float,
    modifier: Modifier = Modifier,
    appearance: ProgressAppearance,
    shape: ProgressShape = ProgressShape.default()
) = LineProgress(listOf(percent), modifier, appearance, shape)
