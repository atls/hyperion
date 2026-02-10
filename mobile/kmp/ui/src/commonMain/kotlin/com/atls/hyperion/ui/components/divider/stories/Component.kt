package com.atls.hyperion.ui.components.divider.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.divider.horizontal.HorizontalDivider
import com.atls.hyperion.ui.components.divider.style.appearance.DividerAppearance
import com.atls.hyperion.ui.components.divider.style.appearance.default
import com.atls.hyperion.ui.components.divider.style.shape.DividerShape
import com.atls.hyperion.ui.components.divider.style.shape.default
import com.atls.hyperion.ui.components.divider.vertical.VerticalDivider
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.tokens.layout.Space

class DividerStory : ComponentExample {
    override val name: String = "Divider"

    @Composable
    override fun Content() {
        Column(modifier = Modifier.padding(Space.sm)) {
            ComponentVariants(
                name = "Horizontal Divider",
                appearances = listOf(
                    "Default" to { DividerAppearance.default() }
                ),
                shapes = listOf(
                    "Default" to { DividerShape.default() }
                )
            ) { appearance: DividerAppearance, shape: DividerShape ->
                HorizontalDivider(
                    appearance = appearance,
                    shape = shape
                )
            }

            VerticalSpacer(Space.xl3)

            ComponentVariants(
                name = "Vertical Divider",
                appearances = listOf(
                    "Default" to { DividerAppearance.default() }
                ),
                shapes = listOf(
                    "Default" to { DividerShape.default() }
                )
            ) { appearance: DividerAppearance, shape: DividerShape ->
                VerticalDivider(
                    modifier = Modifier.height(Space.xl3),
                    appearance = appearance,
                    shape = shape
                )
            }
        }
    }
}
