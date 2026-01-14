package com.atls.hyperion.ui.components.button.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Switch
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.button.Button
import com.atls.hyperion.ui.components.button.styles.appearance.ButtonAppearance
import com.atls.hyperion.ui.components.button.styles.appearance.blue
import com.atls.hyperion.ui.components.button.styles.appearance.lightBlue
import com.atls.hyperion.ui.components.button.styles.shape.ButtonShape
import com.atls.hyperion.ui.components.button.styles.shape.huge
import com.atls.hyperion.ui.components.button.styles.shape.large
import com.atls.hyperion.ui.components.button.styles.shape.medium
import com.atls.hyperion.ui.components.button.styles.shape.normal
import com.atls.hyperion.ui.components.button.styles.shape.semiMedium
import com.atls.hyperion.ui.components.button.styles.shape.small
import com.atls.hyperion.ui.components.button.styles.shape.smallSizeMediumRadii
import com.atls.hyperion.ui.primitives.HorizontalSpacer
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.tokens.layout.Weight

class ButtonStory : ComponentExample {
    override val name: String = "Button"

    @Composable
    override fun Content() {
        var enabled by remember { mutableStateOf(true) }

        Column {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = Space.g12)
            ) {
                Text(modifier = Modifier.weight(Weight.full), text = "Enabled")
                HorizontalSpacer(Space.g12)
                Switch(checked = enabled, onCheckedChange = { enabled = it })
            }
            VerticalSpacer(Space.g12)

            ComponentVariants(
                name = "Button",
                appearances = listOf(
                    "Blue" to { ButtonAppearance.blue() },
                    "Light Blue" to { ButtonAppearance.lightBlue() }
                ),
                shapes = listOf(
                    "Huge" to { ButtonShape.huge() },
                    "Large" to { ButtonShape.large() },
                    "Semi Medium" to { ButtonShape.semiMedium() },
                    "Medium" to { ButtonShape.medium() },
                    "Normal" to { ButtonShape.normal() },
                    "Small" to { ButtonShape.small() },
                    "Small Medium Radii" to { ButtonShape.smallSizeMediumRadii() }
                )
            ) { appearance: ButtonAppearance, shape: ButtonShape ->
                Button(
                    text = "Button",
                    appearance = appearance,
                    shape = shape,
                    enabled = enabled,
                    onClick = {}
                )
            }
        }
    }
}
