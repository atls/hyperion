package com.atls.hyperion.ui.primitives.utils

import androidx.compose.ui.unit.DpOffset
import com.atls.hyperion.ui.theme.tokens.elevation.Shadow
import androidx.compose.ui.graphics.shadow.Shadow as ComposeShadow

internal fun Shadow.toComposeShadow(alphaMultiplier: Float) = ComposeShadow(
    radius = blur,
    spread = spread,
    offset = DpOffset(offsetX, offsetY),
    color = color.copy(alpha = color.alpha * alphaMultiplier)
)
