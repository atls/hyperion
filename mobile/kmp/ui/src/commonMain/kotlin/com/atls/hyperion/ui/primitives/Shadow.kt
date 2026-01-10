package com.atls.hyperion.ui.primitives

import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Shape
import com.adamglin.composeshadow.dropShadow
import com.atls.hyperion.ui.theme.tokens.shadows.Shadow

fun Modifier.shadow(shadow: Shadow, shape: Shape): Modifier = this.then(
    dropShadow(
        color = shadow.color,
        blur = shadow.blur,
        offsetX = shadow.offsetX,
        offsetY = shadow.offsetY,
        spread = shadow.spread,
        shape = shape
    )
)
