package com.atls.hyperion.ui.components.carousel.ui

fun normalizedStartIndex(centerIndex: Int, itemsSize: Int): Int {
    val middle = Int.MAX_VALUE / 2
    return middle - (middle % itemsSize) + (centerIndex % itemsSize)
}
