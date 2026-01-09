package com.atls.hyperion.ui.theme.tokens.shadows

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

data class Shadow(
    val offsetX: Dp,
    val offsetY: Dp,
    val blur: Dp,
    val color: Color,
    val spread: Dp = 0.dp
)
