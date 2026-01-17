package com.atls.hyperion.ui.components.placeholder.model

sealed interface PlaceholderType {
    data class Logo(val text: String, val orientation: PlaceholderOrientation) : PlaceholderType
    object ImageBox : PlaceholderType
}
