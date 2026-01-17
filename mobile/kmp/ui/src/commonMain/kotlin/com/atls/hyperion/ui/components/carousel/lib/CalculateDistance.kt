package com.atls.hyperion.ui.components.carousel.lib

import kotlin.math.abs

fun calculateDistance(itemCenter: Int, viewportCenter: Int, stepPx: Float): Float =
    abs(itemCenter - viewportCenter) / stepPx
