package com.atls.hyperion.ui.components.avatar.styles.shape

import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.theme.tokens.borders.BorderStroke

data class AvatarShape(
    val size: Dp,
    val cornerRadius: Dp,
    val borderStroke: Dp = BorderStroke.none
) {
    companion object
}
