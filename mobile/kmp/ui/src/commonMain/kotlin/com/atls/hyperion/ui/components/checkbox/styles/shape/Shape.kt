package com.atls.hyperion.ui.components.checkbox.styles.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.theme.tokens.layout.Space

data class CheckboxShape(
    val size: Dp,
    val cornerRadius: Dp,
    val borderStroke: Dp,
    val padding: PaddingValues = PaddingValues(Space.xs5)
) {
    companion object
}
