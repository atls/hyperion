package com.atls.hyperion.ui.components.divider.horizontal

import androidx.compose.material.Divider
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.divider.style.appearance.DividerAppearance
import com.atls.hyperion.ui.components.divider.style.appearance.default
import com.atls.hyperion.ui.components.divider.style.shape.DividerShape
import com.atls.hyperion.ui.components.divider.style.shape.default

@Composable
fun HorizontalDivider(
    modifier: Modifier = Modifier,
    appearance: DividerAppearance = DividerAppearance.default(),
    shape: DividerShape = DividerShape.default()
) {
    Divider(
        modifier = modifier,
        color = appearance.color,
        thickness = shape.thickness
    )
}
