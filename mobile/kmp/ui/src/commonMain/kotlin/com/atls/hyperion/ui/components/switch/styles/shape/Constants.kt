package com.atls.hyperion.ui.components.switch.styles.shape

import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

internal val switchThumbWidth = 1.dp
internal val switchThumbHalfWidth = switchThumbWidth / 2

internal object SwitchShapeSizes {
    val sm = Size(width = 24.dp, thumbSize = 8.dp)
    val md = Size(width = 30.dp, thumbSize = 10.dp)
    val lg = Size(width = 36.dp, thumbSize = 12.dp)

    data class Size(
        val width: Dp,
        val thumbSize: Dp,
    )
}
