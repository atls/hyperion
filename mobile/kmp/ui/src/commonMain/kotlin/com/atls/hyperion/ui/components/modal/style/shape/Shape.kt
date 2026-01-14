package com.atls.hyperion.ui.components.modal.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.unit.Dp

data class ModalShape(
    val shape: Shape,
    val shadowElevation: Dp,
    val paddings: PaddingValues,
    val spacers: PaddingValues
) {
    companion object
}
