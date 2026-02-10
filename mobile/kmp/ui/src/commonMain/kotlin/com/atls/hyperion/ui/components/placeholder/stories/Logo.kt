package com.atls.hyperion.ui.components.placeholder.stories

import androidx.compose.runtime.Composable
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.placeholder.Placeholder
import com.atls.hyperion.ui.components.placeholder.model.PlaceholderOrientation
import com.atls.hyperion.ui.components.placeholder.model.PlaceholderType
import com.atls.hyperion.ui.components.placeholder.styles.appearance.PlaceholderAppearance
import com.atls.hyperion.ui.components.placeholder.styles.appearance.logo
import com.atls.hyperion.ui.components.placeholder.styles.shape.PlaceholderShape
import com.atls.hyperion.ui.components.placeholder.styles.shape.logo

@Composable
fun LogoPlaceholderHorizontalVariants() {
    ComponentVariants(
        name = "LogoPlaceholder Horizontal",
        appearances = listOf("Default" to { PlaceholderAppearance.logo() }),
        shapes = listOf("Default" to { PlaceholderShape.logo() })
    ) { appearance, shape ->
        Placeholder(
            type = PlaceholderType.Logo(
                text = "Горизонтальный",
                orientation = PlaceholderOrientation.Horizontal
            ),
            appearance = appearance,
            shape = shape
        )
    }
}

@Composable
fun LogoPlaceholderVerticalVariants() {
    ComponentVariants(
        name = "LogoPlaceholder Vertical",
        appearances = listOf("Default" to { PlaceholderAppearance.logo() }),
        shapes = listOf("Default" to { PlaceholderShape.logo() })
    ) { appearance, shape ->
        Placeholder(
            type = PlaceholderType.Logo(
                text = "Вертикальный",
                orientation = PlaceholderOrientation.Vertical
            ),
            appearance = appearance,
            shape = shape
        )
    }
}
