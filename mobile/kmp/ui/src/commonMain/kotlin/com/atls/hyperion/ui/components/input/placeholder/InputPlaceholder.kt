package com.atls.hyperion.ui.components.input.placeholder

import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.input.style.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.style.appearance.blue
import com.atls.hyperion.ui.components.input.style.shape.InputShape
import com.atls.hyperion.ui.components.input.style.shape.normal

@Composable
fun InputPlaceholder(
    modifier: Modifier = Modifier,
    text: String,
    appearance: InputAppearance = InputAppearance.blue(),
    shape: InputShape = InputShape.normal()
) {
    Text(
        modifier = modifier,
        text = text,
        color = appearance.default.textColor,
        style = shape.typography
    )
}
