package com.atls.hyperion.ui.components.placeholder

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.placeholder.model.PlaceholderType
import com.atls.hyperion.ui.components.placeholder.styles.appearance.PlaceholderAppearance
import com.atls.hyperion.ui.components.placeholder.styles.appearance.imageBox
import com.atls.hyperion.ui.components.placeholder.styles.shape.PlaceholderShape
import com.atls.hyperion.ui.components.placeholder.ui.PlaceholderLayout

@Composable
fun Placeholder(
    modifier: Modifier = Modifier,
    type: PlaceholderType,
    appearance: PlaceholderAppearance = PlaceholderAppearance.imageBox(),
    shape: PlaceholderShape
) {
    when (type) {
        is PlaceholderType.Logo -> {
            PlaceholderLayout(
                modifier = modifier,
                appearance = appearance,
                shape = shape,
                text = type.text,
                orientation = type.orientation
            )
        }

        PlaceholderType.ImageBox -> {
            PlaceholderLayout(
                modifier = modifier,
                appearance = appearance,
                shape = shape
            )
        }
    }
}
