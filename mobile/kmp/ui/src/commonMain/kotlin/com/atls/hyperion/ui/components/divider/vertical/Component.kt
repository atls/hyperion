package com.atls.hyperion.ui.components.divider.vertical

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.width
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.divider.style.appearance.DividerAppearance
import com.atls.hyperion.ui.components.divider.style.appearance.default
import com.atls.hyperion.ui.components.divider.style.shape.DividerShape
import com.atls.hyperion.ui.components.divider.style.shape.default

@Composable
fun VerticalDivider(
    modifier: Modifier = Modifier,
    appearance: DividerAppearance = DividerAppearance.default(),
    shape: DividerShape = DividerShape.default()
) {
    Box(
        modifier = modifier
            .fillMaxHeight()
            .width(shape.thickness)
            .background(color = appearance.color)
    )
}
