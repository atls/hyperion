package com.atls.hyperion.ui.components.carousel.style.shape

import androidx.compose.runtime.Immutable
import androidx.compose.ui.unit.Dp

@Immutable
data class CarouselShape(
    val itemSpacing: Dp,
    val peekWidth: Dp,
    val padding: Dp
) {
    companion object
}
