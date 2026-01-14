package com.atls.hyperion.ui.primitives.icon

import androidx.compose.foundation.layout.size
import androidx.compose.material.Icon
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.unit.Dp

@Composable
fun Icon(
    modifier: Modifier = Modifier,
    icon: Painter,
    color: Color = Color.Unspecified,
    size: Dp =  Dp.Unspecified
) {
    Icon(
        painter = icon,
        contentDescription = null,
        tint = color,
        modifier = modifier.size(size = size)
    )
}
