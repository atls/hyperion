package com.atls.hyperion.ui.components.tooltip.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Immutable
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.DpSize

@Immutable
data class TooltipShape(
    val cornerRadius: Dp,
    val caretSize: DpSize,
    val padding: PaddingValues
) {
    companion object
}
