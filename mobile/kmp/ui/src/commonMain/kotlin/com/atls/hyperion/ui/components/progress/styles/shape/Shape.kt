package com.atls.hyperion.ui.components.progress.styles.shape

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.unit.Dp

data class ProgressShape(
    val cornerRadius: Dp,
    val strokeWidth: Dp,
    val trailWidth: Dp = strokeWidth,
    val strokeLinecap: StrokeCap = StrokeCap.Round,
    val trailLinecap: StrokeCap = strokeLinecap,
    val shape: RoundedCornerShape = RoundedCornerShape(cornerRadius)
) {
    companion object
}
