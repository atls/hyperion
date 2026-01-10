package com.atls.hyperion.ui.components.avatar.styles.shape

import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.theme.tokens.layout.Border

data class AvatarShape(
    val size: Dp,
    val cornerRadius: Dp,
    val borderStroke: Dp = Border.none.width
) {
    companion object
}
