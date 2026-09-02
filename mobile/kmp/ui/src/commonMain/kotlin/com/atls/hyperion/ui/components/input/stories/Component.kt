package com.atls.hyperion.ui.components.input.stories

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
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.TextFieldValue
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.input.Input
import com.atls.hyperion.ui.components.input.InputPlaceholder
import com.atls.hyperion.ui.components.input.styles.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.styles.appearance.primary
import com.atls.hyperion.ui.components.input.styles.appearance.secondary
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.components.input.styles.shape.lg
import com.atls.hyperion.ui.components.input.styles.shape.md
import com.atls.hyperion.ui.components.input.styles.shape.sm
import com.atls.hyperion.ui.primitives.HorizontalSpacer
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.tokens.layout.Weight

class InputStory : ComponentExample {
    override val name: String = "Input"

    @Composable
    override fun Content() {
        var enabled by remember { mutableStateOf(true) }
        var isError by remember { mutableStateOf(false) }
        var textValue by remember { mutableStateOf(TextFieldValue("")) }

        Column {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = Space.sm),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(modifier = Modifier.weight(Weight.full), text = "Enabled")
                HorizontalSpacer(Space.sm)
                Switch(checked = enabled, onCheckedChange = { enabled = it })
            }
            VerticalSpacer(Space.xs2)
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = Space.sm),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(modifier = Modifier.weight(Weight.full), text = "Error")
                HorizontalSpacer(Space.sm)
                Switch(checked = isError, onCheckedChange = { isError = it })
            }
            VerticalSpacer(Space.sm)

            ComponentVariants(
                name = "Input",
                appearances = listOf(
                    "Primary" to { InputAppearance.primary() },
                    "Secondary" to { InputAppearance.secondary() }
                ),
                shapes = listOf(
                    "Sm" to { InputShape.sm() },
                    "Md" to { InputShape.md() },
                    "Lg" to { InputShape.lg() }
                )
            ) { appearance: InputAppearance, shape: InputShape ->
                Input(
                    value = textValue,
                    onValueChange = { textValue = it },
                    appearance = appearance,
                    shape = shape,
                    enabled = enabled,
                    isError = isError,
                    placeholder = {
                        InputPlaceholder(
                            text = "Placeholder",
                            appearance = appearance,
                            shape = shape
                        )
                    }
                )
            }
        }
    }
}
