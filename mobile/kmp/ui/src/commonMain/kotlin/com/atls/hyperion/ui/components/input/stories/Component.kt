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
import com.atls.hyperion.ui.components.input.placeholder.InputPlaceholder
import com.atls.hyperion.ui.components.input.style.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.style.appearance.blue
import com.atls.hyperion.ui.components.input.style.appearance.white
import com.atls.hyperion.ui.components.input.style.shape.InputShape
import com.atls.hyperion.ui.components.input.style.shape.large
import com.atls.hyperion.ui.components.input.style.shape.normal
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
                    "Blue" to { InputAppearance.blue() },
                    "White" to { InputAppearance.white() }
                ),
                shapes = listOf(
                    "Large" to { InputShape.large() },
                    "Normal" to { InputShape.normal() }
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
