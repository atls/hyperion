package com.atls.hyperion.ui.components.checkbox.stories

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
import com.atls.hyperion.ui.components.checkbox.Checkbox
import com.atls.hyperion.ui.components.checkbox.state.State
import com.atls.hyperion.ui.components.checkbox.styles.appearance.CheckboxAppearance
import com.atls.hyperion.ui.components.checkbox.styles.appearance.blue
import com.atls.hyperion.ui.components.checkbox.styles.appearance.green
import com.atls.hyperion.ui.components.checkbox.styles.appearance.red
import com.atls.hyperion.ui.components.checkbox.styles.shape.CheckboxShape
import com.atls.hyperion.ui.components.checkbox.styles.shape.large
import com.atls.hyperion.ui.components.checkbox.styles.shape.medium
import com.atls.hyperion.ui.components.checkbox.styles.shape.small
import com.atls.hyperion.ui.primitives.HorizontalSpacer
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.tokens.layout.Weight

class CheckboxStory : ComponentExample {
    override val name: String = "Checkbox"

    @Composable
    override fun Content() {
        var checked by remember { mutableStateOf(false) }

        var enabled by remember { mutableStateOf(true) }

        Column {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = Space.sm)
            ) {
                Text(modifier = Modifier.weight(Weight.full), text = "Enabled")
                HorizontalSpacer(Space.sm)
                Switch(checked = enabled, onCheckedChange = { enabled = it })
            }
            VerticalSpacer(Space.sm)

            ComponentVariants(
                name = "Checkbox",
                appearances = listOf(
                    "Blue" to { CheckboxAppearance.blue() },
                    "Green" to { CheckboxAppearance.green() },
                    "Red" to { CheckboxAppearance.red() }
                ),
                shapes = listOf(
                    "Small" to { CheckboxShape.small() },
                    "Medium" to { CheckboxShape.medium() },
                    "Large" to { CheckboxShape.large() }
                )
            ) { appearance: CheckboxAppearance, shape: CheckboxShape ->
                Checkbox(
                    state = if (checked) State.Checked else if (!enabled) State.Disabled else State.Default,
                    appearance = appearance,
                    shape = shape,
                    onCheckedChange = { checked = it }
                )
            }
        }
    }
}
