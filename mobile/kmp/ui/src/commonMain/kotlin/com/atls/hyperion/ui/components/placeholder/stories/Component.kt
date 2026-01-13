package com.atls.hyperion.ui.components.placeholder.stories

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.placeholder.Placeholder
import com.atls.hyperion.ui.components.placeholder.model.PlaceholderOrientation
import com.atls.hyperion.ui.components.placeholder.model.PlaceholderType
import com.atls.hyperion.ui.components.placeholder.styles.appearance.PlaceholderAppearance
import com.atls.hyperion.ui.components.placeholder.styles.appearance.imageBox
import com.atls.hyperion.ui.components.placeholder.styles.appearance.logo
import com.atls.hyperion.ui.components.placeholder.styles.shape.PlaceholderShape
import com.atls.hyperion.ui.components.placeholder.styles.shape.imageBox
import com.atls.hyperion.ui.components.placeholder.styles.shape.logo

class PlaceholderStory(
    override val name: String = "Placeholder"
) : ComponentExample {

    @Composable
    override fun Content() {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(32.dp)
        ) {

            ComponentVariants(
                name = "ImageBoxPlaceholder",
                appearances = listOf("Default" to { PlaceholderAppearance.imageBox() }),
                shapes = listOf("Default" to { PlaceholderShape.imageBox() })
            ) { appearance, shape ->
                Box(modifier = Modifier.size(100.dp)) {
                    Placeholder(
                        modifier = Modifier.matchParentSize(),
                        type = PlaceholderType.ImageBox,
                        appearance = appearance,
                        shape = shape
                    )
                }
            }

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
    }
}
