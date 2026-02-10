package com.atls.hyperion.ui.components.placeholder.stories

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.placeholder.Placeholder
import com.atls.hyperion.ui.components.placeholder.model.PlaceholderType
import com.atls.hyperion.ui.components.placeholder.styles.appearance.PlaceholderAppearance
import com.atls.hyperion.ui.components.placeholder.styles.appearance.imageBox
import com.atls.hyperion.ui.components.placeholder.styles.shape.PlaceholderShape
import com.atls.hyperion.ui.components.placeholder.styles.shape.imageBox
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun ImageBoxPlaceholderVariants() {
    ComponentVariants(
        name = "ImageBoxPlaceholder",
        appearances = listOf("Default" to { PlaceholderAppearance.imageBox() }),
        shapes = listOf("Default" to { PlaceholderShape.imageBox() })
    ) { appearance, shape ->
        Box(modifier = Modifier.size(Space.xl3)) {
            Placeholder(
                modifier = Modifier.matchParentSize(),
                type = PlaceholderType.ImageBox,
                appearance = appearance,
                shape = shape
            )
        }
    }
}
